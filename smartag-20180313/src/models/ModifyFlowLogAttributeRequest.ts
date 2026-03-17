// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowLogAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The interval at which log data of active network connections is collected. Default value: **300**. Unit: seconds.
   * 
   * @example
   * 300
   */
  activeAging?: number;
  /**
   * @remarks
   * The description of the flow log.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * fl-7a56mar1kfw9vj****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The interval at which log data of inactive network connections is collected. Default value: **15**. Unit: seconds.
   * 
   * @example
   * 15
   */
  inactiveAging?: number;
  /**
   * @remarks
   * The Logstore of Log Service. This parameter is required when OutputType is set to **sls**.
   * 
   * @example
   * ssfghgh
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * @example
   * DDE
   */
  name?: string;
  /**
   * @remarks
   * The IP address of the NetFlow collector where the flow log is stored. This parameter is required when OutputType is set to **netflow**.
   * 
   * @example
   * 192.168.0.2
   */
  netflowServerIp?: string;
  /**
   * @remarks
   * The port of the NetFlow collector. Default value: **9995**. This parameter is required when OutputType is set to **netflow**.
   * 
   * @example
   * 9995
   */
  netflowServerPort?: number;
  /**
   * @remarks
   * The NetFlow version. Valid values: **V5**, **V9**, and **V10**. Default value: **V9**. This parameter is required when OutputType is set to **netflow**.
   * 
   * @example
   * V9
   */
  netflowVersion?: string;
  /**
   * @remarks
   * The location where the flow log is stored. Valid values:
   * 
   * *   **sls**: The flow log is stored in Log Service.
   * *   **netflow**: The flow log is stored on a NetFlow collector.
   * *   **all**: The flow log is stored both in Log Service and on a NetFlow collector.
   * 
   * @example
   * sls
   */
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The project to which the Logstore of Log Service belongs. This parameter is required when OutputType is set to **sls**.
   * 
   * @example
   * ddrrgt
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where the flow log is deployed.
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
   * The ID of the region where Log Service is deployed. This parameter is required when OutputType is set to **sls**.
   * 
   * @example
   * cn-shanghai
   */
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      flowLogId: 'FlowLogId',
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
      flowLogId: 'string',
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

