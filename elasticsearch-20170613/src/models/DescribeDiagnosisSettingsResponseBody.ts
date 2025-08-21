// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSettingsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Scenarios of intelligent maintenance.
   * 
   * @example
   * Business Search
   */
  scene?: string;
  /**
   * @remarks
   * The timestamp of the last update for Intelligent Maintenance scenarios.
   * 
   * @example
   * 1588994035385
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5E82B8A8-EED7-4557-A6E9-D1AD3E58****
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
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

