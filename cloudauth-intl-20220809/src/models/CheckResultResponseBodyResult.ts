// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultResponseBodyResult extends $dara.Model {
  /**
   * @example
   * **
   */
  ekycResult?: string;
  /**
   * @example
   * **
   */
  extBasicInfo?: string;
  /**
   * @example
   * **
   */
  extFaceInfo?: string;
  /**
   * @example
   * **
   */
  extIdInfo?: string;
  extInfo?: string;
  /**
   * @example
   * **
   */
  extRiskInfo?: string;
  /**
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * ***
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      ekycResult: 'EkycResult',
      extBasicInfo: 'ExtBasicInfo',
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      extInfo: 'ExtInfo',
      extRiskInfo: 'ExtRiskInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ekycResult: 'string',
      extBasicInfo: 'string',
      extFaceInfo: 'string',
      extIdInfo: 'string',
      extInfo: 'string',
      extRiskInfo: 'string',
      passed: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

