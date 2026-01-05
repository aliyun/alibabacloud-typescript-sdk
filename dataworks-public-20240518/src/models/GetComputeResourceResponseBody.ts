// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeResourceResponseBodyComputeResource extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration details for the computing resource, including the connection address, access identity, and environment information. envType, which specifies the computing resource environment, is a property of this object. Valid values:
   * 
   * *   Dev
   * *   Prod Different types of computing resources have different attribute specifications under various configuration modes (ConnectionPropertiesMode).
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @remarks
   * The addition category of the computing resource. Different types will have different subtypes, each with corresponding parameter constraints. For instance:
   * 
   * *   InstanceMode: Instance mode
   * *   UrlMode: Connection String Mode
   * *   CdhMode: CDH mode
   * 
   * @example
   * InstanceMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The creation time, in timestamp format.
   * 
   * @example
   * 1698286929333
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the computing resource.
   * 
   * @example
   * My Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the computing resource.
   * 
   * @example
   * 16738
   */
  id?: number;
  /**
   * @remarks
   * The last modification time, in timestamp format.
   * 
   * @example
   * 1698286929333
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * 1107550004253538
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the computing resource.
   * 
   * @example
   * MyCs
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace to which the computing resource belongs.
   * 
   * @example
   * 52660
   */
  projectId?: number;
  /**
   * @remarks
   * The business unique key for the computing resource. For example, the format for Hologres is ${tenantOwnerId}:${regionId}:${type}:${instanceId}:${database}.
   * 
   * @example
   * 1107550004253538:cn-beijing:holo:hgprecn-cn-x0r3oun4k001:testdb
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The type of the computing resource.
   * 
   * @example
   * hologres
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether it is the default computing resource.
   * 
   * @example
   * true
   */
  whetherDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      projectId: 'ProjectId',
      qualifiedName: 'QualifiedName',
      type: 'Type',
      whetherDefault: 'WhetherDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      projectId: 'number',
      qualifiedName: 'string',
      type: 'string',
      whetherDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the computing resource.
   */
  computeResource?: GetComputeResourceResponseBodyComputeResource;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: GetComputeResourceResponseBodyComputeResource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.computeResource && typeof (this.computeResource as any).validate === 'function') {
      (this.computeResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

