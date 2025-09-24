// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAccountRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the request
   * 
   * @example
   * HostId
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the financial relationship.
   * 
   * @example
   * RelationId
   */
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      relationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: AddAccountRelationResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Message returned
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * Request ID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddAccountRelationResponseBodyData,
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

