// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4a0fae835cd741f3b12376d8a5a8e549v3
   */
  accessToken?: string;
  /**
   * @example
   * 10
   */
  appGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appGroupId: 'AppGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateAppResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAppResponseBodyData,
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

