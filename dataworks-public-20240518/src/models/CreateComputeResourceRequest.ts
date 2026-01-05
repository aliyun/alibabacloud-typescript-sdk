// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration of the computing resource, including the connection address, access identity, and environment information. The environment for the computing resource is a member attribute of this object. It includes DEV (development environment) and PROD (production environment). The value for EnvType is case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * {     "EndpointMode": "custom",     "Database": "testdb",     "TaskSubmitter": "1107550004253538",     "InstanceId": "hgprecn-cn-x0r3oun4k001",     "SecurityProtocol": "authTypeNone",     "RegionId": "cn-beijing",     "EnvType": "Prod",     "AuthType": "Executor" }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * Depending on the added source category, different types may have specific subtypes subject to distinct parameter constraints. For example, Hologres computing resources support InstanceMode and UrlMode.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The description of the computing resource. The maximum length is 3000 characters.
   * 
   * @example
   * demo_holo_cs
   */
  description?: string;
  /**
   * @remarks
   * The name of the computing resource. It can contain letters, digits, and underscores (_), cannot start with a digit or an underscore, and has a maximum length of 255 characters.
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
   * The type of the computing resource. Multiple computing resource types are currently supported.
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

