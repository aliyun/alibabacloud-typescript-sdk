// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The output interval under active connections. Valid values: **60 to 6000**. Unit: seconds. Default value: **300**.
   * 
   * @example
   * 300
   */
  activeAging?: number;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The output interval under inactive connections. Valid values: **10 to 600**. Unit: seconds. Default value: **15**.
   * 
   * @example
   * 15
   */
  inactiveAging?: number;
  /**
   * @remarks
   * The Logstore in Log Service.
   * 
   * If OutputType is set to **sls** or **all**, this parameter is required.
   * 
   * @example
   * config-operation-log
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * @example
   * sag-flowlog-1
   */
  name?: string;
  /**
   * @remarks
   * The IP address of the NetFlow collector where the flow log is stored.
   * 
   * If OutputType is set to **netflow** or **all**, this parameter is required.
   * 
   * @example
   * 192.168.0.2
   */
  netflowServerIp?: string;
  /**
   * @remarks
   * The port number of the NetFlow collector where the flow log is stored. Default value: **9995**.
   * 
   * If OutputType is set to **netflow** or **all**, this parameter is required.
   * 
   * @example
   * 9995
   */
  netflowServerPort?: number;
  /**
   * @remarks
   * The version of the NetFlow collector where the flow log is stored. Valid values: **V5**, **V9**, and **V10**. Default value: **V9**.
   * 
   * If OutputType is set to **netflow** or **all**, this parameter is required.
   * 
   * @example
   * V9
   */
  netflowVersion?: string;
  /**
   * @remarks
   * The type of the flow log. Valid values:
   * 
   * *   **sls**: The flow log is stored in Log Service.
   * *   **netflow**: The flow log is stored on a NetFlow collector.
   * *   **all**: The flow log is stored both in Log Service and on a NetFlow collector.
   * 
   * @example
   * all
   */
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The project in Log Service.
   * 
   * If OutputType is set to **sls** or **all**, this parameter is required.
   * 
   * @example
   * sag-flowlog-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region to which the flow log belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where Log Service is deployed.
   * 
   * If OutputType is set to **sls** or **all**, this parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      inactiveAging: 'InactiveAging',
      logstoreName: 'LogstoreName',
      name: 'Name',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      outputType: 'OutputType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAging: 'number',
      description: 'string',
      inactiveAging: 'number',
      logstoreName: 'string',
      name: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'number',
      netflowVersion: 'string',
      outputType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slsRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

