// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID, also known as `IndexId`. This is the unique identifier of the created knowledge base.
   * > Store this value properly. It is required for all subsequent API operations related to this knowledge base.
   * >
   * 
   * @example
   * jkurxhxxxx
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request succeeds.
   */
  data?: CreateIndexResponseBodyData;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A--2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * "200"
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateIndexResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

