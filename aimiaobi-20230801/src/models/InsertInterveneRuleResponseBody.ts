// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @example
   * 12345
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: InsertInterveneRuleResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * DD656AF9-0839-521A-A3D2-F320009F9C87
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertInterveneRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

