// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAifgUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the diagnostic details.
   * 
   * @example
   * /diagnose/detail/qe3Z34sa
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAifgUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAifgUrlResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAifgUrlResponseBodyData,
      message: 'string',
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

