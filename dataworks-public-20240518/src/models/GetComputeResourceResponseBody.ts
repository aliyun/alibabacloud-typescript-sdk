// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeResourceResponseBodyComputeResource extends $dara.Model {
  /**
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
   * @example
   * InstanceMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * 1698286929333
   */
  createTime?: number;
  /**
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @example
   * My Description
   */
  description?: string;
  /**
   * @example
   * 16738
   */
  id?: number;
  /**
   * @example
   * 1698286929333
   */
  modifyTime?: number;
  /**
   * @example
   * 1107550004253538
   */
  modifyUser?: string;
  /**
   * @example
   * MyCs
   */
  name?: string;
  /**
   * @example
   * 52660
   */
  projectId?: number;
  /**
   * @example
   * 1107550004253538:cn-beijing:holo:hgprecn-cn-x0r3oun4k001:testdb
   */
  qualifiedName?: string;
  /**
   * @example
   * hologres
   */
  type?: string;
  /**
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
  computeResource?: GetComputeResourceResponseBodyComputeResource;
  /**
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

