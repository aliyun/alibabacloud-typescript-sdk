// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadLimitResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The QPS limit on the files uploaded from the client.
   * 
   * @example
   * 100
   */
  limit?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileUploadLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the request is successful.
   */
  data?: GetFileUploadLimitResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A975D03-5F49-5354-B2CB-3918D5DA431A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileUploadLimitResponseBodyData,
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

