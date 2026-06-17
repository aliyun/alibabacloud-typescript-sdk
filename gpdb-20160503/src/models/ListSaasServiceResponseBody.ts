// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasServiceResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The computing resources.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2021-10-15T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * [Deprecated]
   * 
   * @example
   * deprecated
   */
  plan?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-xxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * agdb-xxxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type:
   * 
   * - **memory**
   * - **drama**
   * 
   * @example
   * memory
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status:
   * 
   * - active: Running
   * - creating: Being created
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      cu: 'Cu',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      plan: 'Plan',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      cu: 'number',
      expireTime: 'string',
      payType: 'string',
      plan: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of service details.
   */
  items?: ListSaasServiceResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned in this request. Default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query to begin with.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34b32a0a-08ef-4a87-b6be-cdd9f56fc3ad
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSaasServiceResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

