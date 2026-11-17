// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, which is used to uniquely identify a node. This parameter is used to implement asynchronous processing and idempotence. If you do not specify this parameter when you create a node, the system automatically generates one. This code is uniquely bound to the resource ID. If you specify this parameter when you update or delete a resource, it must be the same as the client unique code used when the resource was created.
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
   * - Prod: production.
   * - Dev: development.
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
   * - T+1: generates instances on the next day.
   * - Immediately: generates instances immediately. Note: Periodic instances are generated normally only if the scheduled time of the node is at least 10 minutes after the node is published. Real-time instance generation is not supported during the full instance generation period (22:00 to 24:00). You can submit and publish nodes, but new nodes are not automatically converted into instances.
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
   * The Alibaba Cloud account ID of the node owner. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and move the mouse over the profile picture in the upper-right corner of the top menu bar to view the account ID. If this parameter is left empty, the Alibaba Cloud account ID of the invoker is used by default.
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
   * - AllDenied: The node cannot be rerun regardless of whether it succeeds or fails.
   * - FailureAllowed: The node can be rerun only if it fails.
   * - AllAllowed: The node can be rerun regardless of whether it succeeds or fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect when the node is configured to be rerunnable.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configuration, such as the resource group information.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The information about the script to be run.
   */
  scriptShrink?: string;
  /**
   * @remarks
   * The list of data asset tags to be bound.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The timeout period defined in the scheduling configuration.
   * 
   * @example
   * 1
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger mode of the node.
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

