// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSettingsResponseBodyResult extends $dara.Model {
  authorizationStatus?: boolean;
  dailyLimit?: number;
  dailyScheduleEnabled?: boolean;
  diagnosisMode?: string;
  /**
   * @remarks
   * The scenario of intelligent O&M.
   * 
   * @example
   * Business Search
   */
  scene?: string;
  selectedItems?: string[];
  /**
   * @remarks
   * The timestamp when the intelligent O&M scenario was last updated.
   * 
   * @example
   * 1588994035385
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'authorizationStatus',
      dailyLimit: 'dailyLimit',
      dailyScheduleEnabled: 'dailyScheduleEnabled',
      diagnosisMode: 'diagnosisMode',
      scene: 'scene',
      selectedItems: 'selectedItems',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'boolean',
      dailyLimit: 'number',
      dailyScheduleEnabled: 'boolean',
      diagnosisMode: 'string',
      scene: 'string',
      selectedItems: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.selectedItems)) {
      $dara.Model.validateArray(this.selectedItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E82B8A8-EED7-4557-A6E9-D1AD3E58****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeDiagnosisSettingsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDiagnosisSettingsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

