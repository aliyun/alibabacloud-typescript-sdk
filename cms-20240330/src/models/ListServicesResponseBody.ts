// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * Extended information.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-07-01T02:23:59Z
   */
  createTime?: string;
  /**
   * @remarks
   * Service description, valid only when serviceType=RUM.
   * 
   * @example
   * workspace api monitor test
   */
  description?: string;
  /**
   * @remarks
   * Display name, valid only when serviceType=RUM.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Historical compatible ARMS application ID
   * 
   * @example
   * kgcsf@192197e828d51aa
   */
  pid?: string;
  /**
   * @example
   * rg-aekxxzuad5zzzz
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * jm2pl0yoqf@d4905cb11a4f218dfb0a8
   */
  serviceId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * demo-app
   */
  serviceName?: string;
  /**
   * @remarks
   * Service status, valid only when serviceType=RUM.
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Service type
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
  /**
   * @remarks
   * Workspace.
   * 
   * @example
   * default-cms-1192928460540589-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      pid: 'pid',
      resourceGroupId: 'resourceGroupId',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceType: 'serviceType',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      pid: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Maximum number of results to return, with a maximum value of 200
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * List of service information.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      services: 'services',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
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

