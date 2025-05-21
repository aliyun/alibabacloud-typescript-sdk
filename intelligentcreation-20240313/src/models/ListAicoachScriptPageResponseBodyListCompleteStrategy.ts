// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListCompleteStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 75
   */
  duration?: number;
  /**
   * @example
   * false
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      fullCoverageAutoEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

