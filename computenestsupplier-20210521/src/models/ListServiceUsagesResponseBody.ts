// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceUsagesResponseBodyServiceUsages extends $dara.Model {
  /**
   * @remarks
   * The remarks on the approval.
   * 
   * @example
   * Review approved.
   */
  comments?: string;
  /**
   * @remarks
   * The time when the request was created.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c9f36ec6d19b4exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Deployment link permission request
   */
  serviceName?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Submitted: The request is submitted and is pending approval.
   * 
   * - Approved: The request is approved.
   * 
   * - Rejected: The request is rejected.
   * 
   * - Canceled: The request is canceled.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The supplier name.
   * 
   * @example
   * Acceptance test
   */
  supplierName?: string;
  /**
   * @remarks
   * The time when the request was last updated.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  /**
   * @remarks
   * The information about the user who submitted the request.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not empty, more results can be retrieved.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18AD0960-A9FE-1AC8-ADF8-22131Fxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The service usage details.
   */
  serviceUsages?: ListServiceUsagesResponseBodyServiceUsages[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceUsages: 'ServiceUsages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceUsages: { 'type': 'array', 'itemType': ListServiceUsagesResponseBodyServiceUsages },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceUsages)) {
      $dara.Model.validateArray(this.serviceUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

