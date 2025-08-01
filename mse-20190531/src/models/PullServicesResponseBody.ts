// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullServicesResponseBodyDataServices extends $dara.Model {
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the service.
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
  saeAppId?: string;
  /**
   * @remarks
   * The ID of the service source.
   * 
   * @example
   * 1
   */
  sourceId?: string;
  sourceIdList?: number[];
  /**
   * @remarks
   * The type of the service source.
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
   * The name of the group.
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
   * The alias of the namespace.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The information about services.
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
   * The status code returned.
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
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * You are not authorized to perform this operation. Action: mse:PullServices, Resource: acs:mse:cn-shenzhen:1228932054837788:*
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC0A99B9-8BA3-5FE3-8FE7-D7C719CF7BD2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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

