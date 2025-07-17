// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * d-cpu1aullhtgkidg7sa4g
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CreateDomainResponseBodyData;
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the API call link.
   * 
   * @example
   * 0C2D1C68-0D93-5561-8EE6-FDB7BF067A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
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

