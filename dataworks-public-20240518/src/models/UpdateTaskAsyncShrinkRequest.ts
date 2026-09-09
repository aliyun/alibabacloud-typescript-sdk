// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, which uniquely identifies a node. This code is used for asynchronous operations and idempotence. If you do not specify this parameter during creation, the system automatically generates one. The code is uniquely bound to the resource ID. When updating or deleting a resource, if you specify this parameter, it must be the same as the client unique code specified during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The dependency information.
   */
  dependenciesShrink?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a description.
   */
  description?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * 
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   */
  inputsShrink?: string;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * - T+1: Generates instances the next day.
   * - Immediately: Generates instances immediately. Note: Only periodic instances whose scheduled time is at least 10 minutes after the node publish time are generated. During the full instance generation period (22:00 to 24:00), real-time instance generation is not available. You can submit and publish nodes, but new nodes do not automatically generate instances.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputsShrink?: string;
  /**
   * @remarks
   * The account ID of the node owner. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and hover over the profile picture in the upper-right corner of the top navigation bar to view the account ID. If this parameter is left empty, the Alibaba Cloud account ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The retry time interval, in milliseconds. The value cannot exceed 1800000.
   * 
   * @example
   * 60000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * Specifies whether the node can be rerun. Valid values:
   * - AllDenied: Cannot be rerun regardless of success or failure.
   * - FailureAllowed: Can be rerun only upon failure.
   * - AllAllowed: Can be rerun regardless of success or failure.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect when the node is configured to allow reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configuration, such as schedule resource group information.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The script information.
   */
  scriptShrink?: string;
  /**
   * @remarks
   * The list of data asset tags to bind.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The timeout setting for scheduling configuration.
   * 
   * @example
   * 1
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method of the node.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      dataSourceShrink: 'DataSource',
      dependenciesShrink: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      inputsShrink: 'Inputs',
      instanceMode: 'InstanceMode',
      name: 'Name',
      outputsShrink: 'Outputs',
      owner: 'Owner',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResourceShrink: 'RuntimeResource',
      scriptShrink: 'Script',
      tagsShrink: 'Tags',
      timeout: 'Timeout',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      dataSourceShrink: 'string',
      dependenciesShrink: 'string',
      description: 'string',
      envType: 'string',
      id: 'number',
      inputsShrink: 'string',
      instanceMode: 'string',
      name: 'string',
      outputsShrink: 'string',
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResourceShrink: 'string',
      scriptShrink: 'string',
      tagsShrink: 'string',
      timeout: 'number',
      triggerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

