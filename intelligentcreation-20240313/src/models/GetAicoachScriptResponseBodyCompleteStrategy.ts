// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyCompleteStrategy extends $dara.Model {
  /**
   * @example
   * 5
   */
  abnormalQuitSessionExpired?: number;
  /**
   * @example
   * true
   */
  abnormalQuitSessionExpiredFlag?: boolean;
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 15
   */
  duration?: number;
  /**
   * @example
   * true
   */
  durationFlag?: boolean;
  /**
   * @example
   * true
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalQuitSessionExpired: 'abnormalQuitSessionExpired',
      abnormalQuitSessionExpiredFlag: 'abnormalQuitSessionExpiredFlag',
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      durationFlag: 'durationFlag',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalQuitSessionExpired: 'number',
      abnormalQuitSessionExpiredFlag: 'boolean',
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      durationFlag: 'boolean',
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

