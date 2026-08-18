// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the business process.
   * 
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @remarks
   * The name of the business process. The name must be unique within the same workspace.
   * 
   * @example
   * The first business process
   */
  businessName?: string;
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * This is my first business process.
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the business process owner.
   * 
   * @example
   * 20000****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the business process belongs.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The functional module to which the business process belongs. Valid values: NORMAL (DataStudio) and MANUAL_BIZ (manual business process).
   * 
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
  /**
   * @remarks
   * The details of the business process.
   */
  data?: GetBusinessResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
   * 
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

