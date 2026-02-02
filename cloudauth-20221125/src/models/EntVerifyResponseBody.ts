// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntVerifyResponseBodyResultRiskVerifyResultModelResults extends $dara.Model {
  /**
   * @remarks
   * Model name
   * 
   * @example
   * model_1
   */
  modelName?: string;
  /**
   * @remarks
   * Model result
   * 
   * @example
   * 5
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResultRiskVerifyResult extends $dara.Model {
  /**
   * @remarks
   * Whether found
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * List of enterprise risk verification model results
   */
  modelResults?: EntVerifyResponseBodyResultRiskVerifyResultModelResults[];
  static names(): { [key: string]: string } {
    return {
      found: 'Found',
      modelResults: 'ModelResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      found: 'boolean',
      modelResults: { 'type': 'array', 'itemType': EntVerifyResponseBodyResultRiskVerifyResultModelResults },
    };
  }

  validate() {
    if(Array.isArray(this.modelResults)) {
      $dara.Model.validateArray(this.modelResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Enterprise risk verification result
   */
  riskVerifyResult?: EntVerifyResponseBodyResultRiskVerifyResult;
  static names(): { [key: string]: string } {
    return {
      riskVerifyResult: 'RiskVerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskVerifyResult: EntVerifyResponseBodyResultRiskVerifyResult,
    };
  }

  validate() {
    if(this.riskVerifyResult && typeof (this.riskVerifyResult as any).validate === 'function') {
      (this.riskVerifyResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Result
   */
  result?: EntVerifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: EntVerifyResponseBodyResult,
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

