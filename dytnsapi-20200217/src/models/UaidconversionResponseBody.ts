// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDConversionResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneList?: string;
  static names(): { [key: string]: string } {
    return {
      phoneList: 'PhoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UAIDConversionResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: UAIDConversionResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: UAIDConversionResponseBodyModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

