// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitDtsRdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data synchronization task.
   * 
   * @example
   * dtszvxa4qmot6p****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * If the node is a self-managed MySQL database that is connected over CEN, you must specify the ID of the CEN instance.
   * 
   * > You must specify the **EndpointRegion** and **EndpointInstanceId** parameters or the EndpointCenId parameter based on the type of the node.
   * 
   * @example
   * cen-9kqshqum*******
   */
  endpointCenId?: string;
  /**
   * @remarks
   * If the node is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
   * 
   * > *   You must also specify the **EndpointRegion** parameter.
   * >*   You must specify the EndpointInstanceId parameter or the **EndpointCenId** parameter based on the type of the node.
   * 
   * @example
   * rm-bp1162kryivb8****
   */
  endpointInstanceId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **RDS**: an ApsaraDB RDS for MySQL instance
   * *   **CEN**: a self-managed MySQL database that is connected over CEN
   * 
   * @example
   * RDS
   */
  endpointInstanceType?: string;
  /**
   * @remarks
   * If the node is an ApsaraDB RDS for MySQL instance, you must specify the region in which the ApsaraDB RDS for MySQL instance resides.
   * 
   * > *   You must also specify the **EndpointInstanceId** parameter.
   * >*   You must specify the EndpointRegion parameter or the **EndpointCenId** parameter based on the type of the node.
   * 
   * @example
   * cn-hangzhou
   */
  endpointRegion?: string;
  /**
   * @remarks
   * The ID of the region in which the active geo-redundancy database cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
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

