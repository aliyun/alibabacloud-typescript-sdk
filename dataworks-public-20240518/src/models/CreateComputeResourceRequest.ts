// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {     "EndpointMode": "custom",     "Database": "testdb",     "TaskSubmitter": "1107550004253538",     "InstanceId": "hgprecn-cn-x0r3oun4k001",     "SecurityProtocol": "authTypeNone",     "RegionId": "cn-beijing",     "EnvType": "Prod",     "AuthType": "Executor" }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * demo_holo_cs
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_holo_cs
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
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

