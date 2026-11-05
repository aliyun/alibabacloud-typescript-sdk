// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The output interval for active flows. Valid values: **60** to **6000**. Unit: seconds. Default value: **300**.
   * 
   * @example
   * 300
   */
  activeAging?: number;
  /**
   * @remarks
   * The description of the flow log instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The output interval for inactive flows. Valid values: **10** to **600**. Unit: seconds. Default value: **15**.
   * 
   * @example
   * 15
   */
  inactiveAging?: number;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * This parameter is required when the output type of the flow log is **sls** or **all**.
   * 
   * @example
   * config-operation-log
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the flow log instance.
   * 
   * @example
   * sag-flowlog-1
   */
  name?: string;
  /**
   * @remarks
   * The IP address of the NetFlow server that stores the flow log.
   * 
   * This parameter is required when the output type of the flow log is **netflow** or **all**.
   * 
   * @example
   * 192.168.0.2
   */
  netflowServerIp?: string;
  /**
   * @remarks
   * The server port of the NetFlow server that stores the flow log. Default value: **9995**.
   * 
   * This parameter is required when the output type of the flow log is **netflow** or **all**.
   * 
   * @example
   * 9995
   */
  netflowServerPort?: number;
  /**
   * @remarks
   * The version of the NetFlow protocol used to store the flow log. Valid values: **V5**, **V9**, and **V10**. Default value: **V9**.
   * 
   * This parameter is required when the output type of the flow log is **netflow** or **all**.
   * 
   * @example
   * V9
   */
  netflowVersion?: string;
  /**
   * @remarks
   * The output type of the flow log. Valid values:
   * 
   * - **sls**: The flow log is stored in Simple Log Service.
   * 
   * - **netflow**: The flow log is stored on the NetFlow server that you configure.
   * 
   * - **all**: The flow log is stored in both Simple Log Service and the NetFlow server that you configure.
   * 
   * @example
   * all
   */
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required when the output type of the flow log is **sls** or **all**.
   * 
   * @example
   * sag-flowlog-shanghai
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * The region ID of Simple Log Service.
   * 
   * This parameter is required when the output type of the flow log is **sls** or **all**.
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

