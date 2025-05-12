// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateListResponseBodyTemplateListTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: sierra and bayer.
   * 
   * @example
   * sierra
   */
  ditherMode?: string;
  /**
   * @remarks
   * The duration for which the final frame is paused.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * Indicates whether a custom palette is used.
   * 
   * @example
   * false
   */
  isCustomPalette?: string;
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

