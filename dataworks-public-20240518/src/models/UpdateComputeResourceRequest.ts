// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration of the computing resource, including the connection address, access identity, and environment information. The environment type (EnvType) of the computing resource is a member attribute of this object, including DEV (development environment) and PROD (production environment). The value is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "envType": "Prod",
   *     "regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The category of the computing resource to be added. Different types have different subtypes and corresponding parameter schema constraints. Examples: InstanceMode and UrlMode.
   * 
   * @example
   * InstanceMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The description of the computing resource. The maximum length is 3000 characters.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the computing resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      id: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

