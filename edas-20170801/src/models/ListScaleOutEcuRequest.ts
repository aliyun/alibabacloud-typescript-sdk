// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScaleOutEcuRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Specify this parameter if you want to query the available ECUs in the cluster where the application is deployed.
   * 
   * >  Specify at least one of the ClusterId and AppId parameters as the query parameter.
   * 
   * @example
   * b93024fd-8a9d-4ef7-99f1-5f0d65cc****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the cluster. Specify this parameter if you want to query the available ECUs in the cluster.
   * 
   * > Specify at least one of the ClusterId and AppId parameters as the query parameter.
   * 
   * @example
   * 52984524-6d48-4bbd-******************
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of CPU cores based on which you want to query the available ECUs in the cluster.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the instance group. Specify this parameter if you want to query the available ECUs in the cluster where the instance group resides.
   * 
   * @example
   * 8123db90-880f-486f-****-****
   */
  groupId?: string;
  /**
   * @remarks
   * The number of ECUs that you want to query. If this parameter is not specified, all the ECUs that meet the query conditions are returned.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * *   The ID of a custom namespace is in the `region ID:namespace identifier` format. Example: cn-beijing:test.
   * *   The ID of the default namespace is in the `region ID` format. Example: cn-beijing.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The size of available memory based on which you want to query the available ECUs in the cluster. Unit: MB.
   * 
   * @example
   * 200
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      groupId: 'GroupId',
      instanceNum: 'InstanceNum',
      logicalRegionId: 'LogicalRegionId',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      cpu: 'number',
      groupId: 'string',
      instanceNum: 'number',
      logicalRegionId: 'string',
      mem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

