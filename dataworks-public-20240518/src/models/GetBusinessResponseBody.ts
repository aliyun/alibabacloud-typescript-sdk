// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @example
   * The first business process
   */
  businessName?: string;
  /**
   * @example
   * This is my first business process.
   */
  description?: string;
  /**
   * @example
   * 20000****
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessResponseBody extends $dara.Model {
  data?: GetBusinessResponseBodyData;
  /**
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBusinessResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

