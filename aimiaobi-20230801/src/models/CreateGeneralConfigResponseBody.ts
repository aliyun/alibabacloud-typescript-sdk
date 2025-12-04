// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGeneralConfigResponseBodyData extends $dara.Model {
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

export class CreateGeneralConfigResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: CreateGeneralConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
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
      data: CreateGeneralConfigResponseBodyData,
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

