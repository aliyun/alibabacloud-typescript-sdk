// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullServicesResponseBodyDataServices extends $dara.Model {
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The SAE application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  saeAppId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * 1
   */
  sourceId?: string;
  /**
   * @remarks
   * The list of associated service source IDs.
   */
  sourceIdList?: number[];
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      saeAppId: 'SaeAppId',
      sourceId: 'SourceId',
      sourceIdList: 'SourceIdList',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      saeAppId: 'string',
      sourceId: 'string',
      sourceIdList: { 'type': 'array', 'itemType': 'number' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceIdList)) {
      $dara.Model.validateArray(this.sourceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The namespace alias.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The list of services.
   */
  services?: PullServicesResponseBodyDataServices[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      namespace: 'Namespace',
      namespaceShowName: 'NamespaceShowName',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      namespace: 'string',
      namespaceShowName: 'string',
      services: { 'type': 'array', 'itemType': PullServicesResponseBodyDataServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: PullServicesResponseBodyData[];
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
   * The returned message.
   * 
   * @example
   * You are not authorized to perform this operation. Action: mse:PullServices, Resource: acs:mse:cn-shenzhen:1228932054837788:*
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC0A99B9-8BA3-5FE3-8FE7-D7C719CF7BD2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': PullServicesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

