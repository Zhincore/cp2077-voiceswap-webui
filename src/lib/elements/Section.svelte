<script lang="ts">
</script>

<div class="group relative my-8 px-6 py-4">
  <div
    inert
    class="wrapper absolute inset-0 opacity-50 transition-all duration-1000 group-hover:opacity-100"
  >
    <div class="frame absolute inset-0" />
  </div>

  <slot />
</div>

<style lang="scss">
  $bevel: 64px;
  $bevelAdjust: 16px;
  $width: 8px;

  @function shape($offset, $bevelAdd) {
    $_bevel: $bevel + $offset - $bevelAdd;
    @return (
      $offset $offset,
      $offset calc(100% - #{$_bevel}),
      #{$_bevel} calc(100% - #{$offset}),
      calc(100% - #{$offset}) calc(100% - #{$offset}),
      calc(100% - #{$offset}) #{$_bevel},
      calc(100% - #{$_bevel}) $offset,
      $offset $offset
    );
  }

  @function reverse-shape($shape) {
    $reversed: ();
    @for $i from 1 through length($shape) {
      $point: nth($shape, length($shape) - $i + 1);
      $reversed: append($reversed, $point, $separator: comma);
    }
    @return $reversed;
  }

  .frame {
    clip-path: polygon(shape(0px, $bevelAdjust), reverse-shape(shape($width, 0px)));
    background: repeating-linear-gradient(
      theme("colors.cyan.400"),
      theme("colors.cyan.400") 1px,
      unquote("theme('colors.cyan.400')11") 1px,
      unquote("theme('colors.cyan.400')11") 2px
    );
  }

  .wrapper {
    filter: drop-shadow(0 0 4px theme("colors.cyan.400"));
  }
  .group:hover .wrapper {
    filter: drop-shadow(0 0 8px theme("colors.cyan.300"));
  }
</style>
