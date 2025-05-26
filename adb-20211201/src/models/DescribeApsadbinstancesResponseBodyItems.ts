// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAPSADBInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The specifications of the reserved computing resources.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * am-bp1********
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The amount of remaining reserved computing resources that are available in the cluster.
   * 
   * @example
   * 24ACU
   */
  reservedACU?: string;
  /**
   * @remarks
   * The specifications of the reserved storage resources.
   * 
   * @example
   * 24ACU
   */
  storageResource?: number;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      reservedACU: 'ReservedACU',
      storageResource: 'StorageResource',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      reservedACU: 'string',
      storageResource: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

