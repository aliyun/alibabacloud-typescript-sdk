// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConfigResponseBodyDataResource extends $dara.Model {
  /**
   * @remarks
   * The number of clusters to which the configuration is applied.
   * 
   * @example
   * 0
   */
  cluster?: number;
  /**
   * @remarks
   * The number of nodes to which the configuration is applied.
   * 
   * @example
   * 0
   */
  node?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      node: 'node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'number',
      node: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the component configuration.
   * 
   * @example
   * 4d5ecf02-3d01-11f0-8c90-00163e1029af
   */
  configId?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * Configuration-x
   */
  configName?: string;
  /**
   * @remarks
   * The type of the configuration.
   * 
   * @example
   * Custom
   */
  configType?: string;
  /**
   * @remarks
   * The text of the chat content.
   * 
   * @example
   * The specific content of the copilot reply
   */
  content?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-10T17:57:10
   */
  createdAt?: string;
  /**
   * @remarks
   * The information about the resources to which the configuration is applied.
   */
  resource?: GetAgentConfigResponseBodyDataResource;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-07-10T17:57:10
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'configId',
      configName: 'configName',
      configType: 'configType',
      content: 'content',
      createdAt: 'createdAt',
      resource: 'resource',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      configName: 'string',
      configType: 'string',
      content: 'string',
      createdAt: 'string',
      resource: GetAgentConfigResponseBodyDataResource,
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentConfigResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error message of the request.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned records.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAgentConfigResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

