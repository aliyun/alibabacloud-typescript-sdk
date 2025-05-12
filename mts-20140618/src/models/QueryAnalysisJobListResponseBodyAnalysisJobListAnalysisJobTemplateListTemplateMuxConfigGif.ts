// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The interval between two consecutive loops for the GIF format. Unit: 0.01 second. For example, a value of 500 indicates 5 seconds.
   * 
   * @example
   * 0
   */
  finalDelay?: string;
  /**
   * @remarks
   * The number of loops for the GIF or WebP format. Default value: 0.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      finalDelay: 'FinalDelay',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalDelay: 'string',
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

