// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGeneralConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx
   */
  configDesc?: string;
  /**
   * @example
   * xx
   */
  configKey?: string;
  /**
   * @example
   * xx
   */
  configValue?: string;
  /**
   * @example
   * xx
   */
  configValueType?: string;
  static names(): { [key: string]: string } {
    return {
      configDesc: 'ConfigDesc',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      configValueType: 'ConfigValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDesc: 'string',
      configKey: 'string',
      configValue: 'string',
      configValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneralConfigResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetGeneralConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      data: GetGeneralConfigResponseBodyData,
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

