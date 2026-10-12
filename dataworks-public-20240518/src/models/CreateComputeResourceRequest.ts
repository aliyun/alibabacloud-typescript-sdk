// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration information of the compute resource, including the endpoint, access identity, and environment context. The environment type (EnvType) of the compute resource is a member property of this object. Valid values include DEV (development environment) and PROD (production environment). The EnvType value is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "EndpointMode": "custom",     "Database": "testdb",     "TaskSubmitter": "1107550004253538",     "InstanceId": "hgprecn-cn-x0r3oun4k001",     "SecurityProtocol": "authTypeNone",     "RegionId": "cn-beijing",     "EnvType": "Prod",     "AuthType": "Executor" }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The mode in which the compute resource is added. Different types have different subtypes and corresponding parameter constraints. For example, for a Hologres compute resource, valid values include InstanceMode (instance mode) and UrlMode (connection string mode).
   * 
   * This parameter is required.
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
   * demo_holo_cs
   */
  description?: string;
  /**
   * @remarks
   * The name of the compute resource. The name can contain letters, digits, and underscores (_), and cannot start with a digit or an underscore. The name can be up to 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_holo_cs
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the compute resource. Multiple compute resource types are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

