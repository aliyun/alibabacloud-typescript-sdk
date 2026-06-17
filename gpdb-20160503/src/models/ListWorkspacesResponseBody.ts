// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyItemsApikeysAuthServices extends $dara.Model {
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-eqxwj5tj5ojx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - memory
   * - drama.
   * 
   * @example
   * drama
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyItemsApikeys extends $dara.Model {
  /**
   * @remarks
   * The services authorized for the API key.
   */
  authServices?: ListWorkspacesResponseBodyItemsApikeysAuthServices[];
  /**
   * @remarks
   * The creation time of the API key.
   * 
   * @example
   * 2026-03-09T02:26:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * my api key
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API key.
   * 
   * @example
   * api-xxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * my-apikey
   */
  keyName?: string;
  /**
   * @remarks
   * The prefix of the API key.
   * 
   * @example
   * sk-xxxxxx
   */
  keyPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      authServices: 'AuthServices',
      createTime: 'CreateTime',
      description: 'Description',
      keyId: 'KeyId',
      keyName: 'KeyName',
      keyPrefix: 'KeyPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authServices: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyItemsApikeysAuthServices },
      createTime: 'string',
      description: 'string',
      keyId: 'string',
      keyName: 'string',
      keyPrefix: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authServices)) {
      $dara.Model.validateArray(this.authServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyItemsServices extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-09T02:26:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The compute resource.
   * 
   * @example
   * 1
   */
  cu?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-01-26T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * > - If this parameter is not specified, the default value is pay-as-you-go.
   * > - In subscription billing mode, a discount is available when you purchase a duration of one year or longer. Select the billing type as needed.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * [Deprecated].
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
   * - memory
   * - drama.
   * 
   * @example
   * memory
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - creating: The service is being created.
   * - active: The service is running.
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
      cu: 'string',
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

export class ListWorkspacesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of API keys for the workspace.
   */
  apikeys?: ListWorkspacesResponseBodyItemsApikeys[];
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
   * The services in the workspace.
   */
  services?: ListWorkspacesResponseBodyItemsServices[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * gp-ws-wkb4fp3j9u79ha
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * - Maximum length: 50.
   * - Must be unique.
   * - Special characters are not allowed.
   * 
   * @example
   * anchashid8FocugQ.oxs.xaliyun.com/oxspopscand8FocugQ#
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apikeys: 'Apikeys',
      createTime: 'CreateTime',
      services: 'Services',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeys: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyItemsApikeys },
      createTime: 'string',
      services: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyItemsServices },
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apikeys)) {
      $dara.Model.validateArray(this.apikeys);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of workspace details.
   */
  items?: ListWorkspacesResponseBodyItems[];
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
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
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

