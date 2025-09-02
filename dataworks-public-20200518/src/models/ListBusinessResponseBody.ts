// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessResponseBodyDataBusiness extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 3000001
   */
  businessId?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * My first workflow
   */
  businessName?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * My first workflow
   */
  description?: string;
  /**
   * @remarks
   * The owner of the workflow.
   * 
   * @example
   * 34824327****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the workflow belongs.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The module to which the workflow belongs. Valid values: NORMAL and MANUAL_BIZ. The value NORMAL indicates that the workflow belongs to auto triggered workflows. The value MANUAL_BIZ indicates that the workflow belongs to manually triggered workflows.
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
      projectId: 'number',
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

export class ListBusinessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the workflow.
   */
  business?: ListBusinessResponseBodyDataBusiness[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: { 'type': 'array', 'itemType': ListBusinessResponseBodyDataBusiness },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.business)) {
      $dara.Model.validateArray(this.business);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the workflows returned.
   */
  data?: ListBusinessResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListBusinessResponseBodyData,
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

