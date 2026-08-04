// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasServiceResponseBodyItemsComponents extends $dara.Model {
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 0644c5aa-5306-478b-ac39-bb4660cdc9f7
   */
  componentId?: string;
  /**
   * @remarks
   * The type of the subcomponent.
   * 
   * @example
   * gamestudio
   */
  componentType?: string;
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
   * The compute resource of the component.
   * 
   * @example
   * 2
   */
  cu?: string;
  /**
   * @remarks
   * The release protection status.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - active: Running.
   * - creating: Being created.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
      createTime: 'CreateTime',
      cu: 'Cu',
      deletionProtection: 'DeletionProtection',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
      createTime: 'string',
      cu: 'string',
      deletionProtection: 'boolean',
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

export class ListSaasServiceResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of service subcomponents.
   */
  components?: ListSaasServiceResponseBodyItemsComponents[];
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
   * The compute resource.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * Indicates whether the release protection feature is enabled. Valid values:
   * 
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * @example
   * True
   */
  deletionProtection?: boolean;
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
   * - **POSTPAY**: Pay-as-you-go.
   * - **PREPAY**: Subscription.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * **[Deprecated]**
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
   * The service type. Valid values:
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
   * The service status. Valid values:
   * 
   * - active: Running.
   * - creating: Being created.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      createTime: 'CreateTime',
      cu: 'Cu',
      deletionProtection: 'DeletionProtection',
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
      components: { 'type': 'array', 'itemType': ListSaasServiceResponseBodyItemsComponents },
      createTime: 'string',
      cu: 'number',
      deletionProtection: 'boolean',
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
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance details.
   */
  items?: ListSaasServiceResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
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

