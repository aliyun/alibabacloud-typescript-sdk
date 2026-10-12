// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration information of the compute resource, including the endpoint, access identity, and environment context. The EnvType property of the compute resource environment is a member attribute of this object. Valid values include DEV (development environment) and PROD (production environment). The value is case-insensitive.
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
   * The category of the added compute resource. Different types have different subtypes, which correspond to different parameter schema constraints. Examples: InstanceMode for instance mode and UrlMode for connection string mode.
   * 
   * @example
   * InstanceMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The description of the compute resource. The description can be up to 3,000 characters in length.
   * 
   * @example
   * Hierarchical description
   */
  description?: string;
  /**
   * @remarks
   * The compute resource ID.
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

