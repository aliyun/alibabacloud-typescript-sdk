// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitDtsRdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the synchronization node.
   * 
   * @example
   * dtszvxa4qmot6p****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the CEN instance. This parameter is required if the unit node is a self-managed MySQL database connected through CEN.
   * > You must specify either this parameter or the ApsaraDB RDS for MySQL-related parameters (**EndpointRegion** and **EndpointInstanceId**).
   * 
   * @example
   * cen-9kqshqum*******
   */
  endpointCenId?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS for MySQL instance. This parameter is required if the unit node is an ApsaraDB RDS for MySQL instance.
   * > - You must also specify the **EndpointRegion** parameter.
   * - You must specify either this parameter or **EndpointCenId**.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  endpointInstanceId?: string;
  /**
   * @remarks
   * The instance type of the unit node. Valid values:
   * 
   * - **RDS**: ApsaraDB RDS for MySQL instance.
   * - **CEN**: self-managed MySQL database connected through CEN.
   * 
   * @example
   * RDS
   */
  endpointInstanceType?: string;
  /**
   * @remarks
   * The region in which the ApsaraDB RDS for MySQL instance resides. This parameter is required if the unit node is an ApsaraDB RDS for MySQL instance.
   * 
   * > - You must also specify the **EndpointInstanceId** parameter.
   * - You must specify either this parameter or **EndpointCenId**.
   * 
   * @example
   * cn-hangzhou
   */
  endpointRegion?: string;
  /**
   * @remarks
   * The region in which the active geo-redundancy database cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. This is a global parameter and does not need to be specified for this operation.
   * 
   * @example
   * 资源组ID，全局参数，当前API无需传入。
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      endpointCenId: 'EndpointCenId',
      endpointInstanceId: 'EndpointInstanceId',
      endpointInstanceType: 'EndpointInstanceType',
      endpointRegion: 'EndpointRegion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      endpointCenId: 'string',
      endpointInstanceId: 'string',
      endpointInstanceType: 'string',
      endpointRegion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

