// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSynchronizationEndpointRequestEndpoint extends $dara.Model {
  /**
   * @remarks
   * The IP address of the database.
   * 
   * >  You must specify the IP address only if the **Endpoint.InstanceType** parameter is set to **Express**.
   * 
   * @example
   * 172.15.185.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the virtual private cloud (VPC).
   * 
   * > 
   * *   If the **Endpoint.InstanceType** parameter is set to **ECS**, you must specify the ID of the ECS instance.
   * *   If the **Endpoint.InstanceType** parameter is set to **Express**, you must specify the ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp11haem1kpkhoup****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the database. Valid values:
   * 
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **Express**: self-managed database that is connected over Express Connect
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The service port number of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Specifies whether to update the connection settings of the source instance or the destination instance. Valid values:
   * 
   * *   **Source**
   * *   **Destination**
   * 
   * This parameter is required.
   * 
   * @example
   * Destination
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
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

