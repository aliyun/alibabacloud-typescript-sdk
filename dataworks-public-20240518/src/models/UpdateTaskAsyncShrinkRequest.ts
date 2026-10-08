// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, used to uniquely identify a node. This code is used for asynchronous processing and idempotence. If you do not specify this parameter when creating a node, the system automatically generates a value and binds it to the resource ID. If you specify this parameter when updating or deleting a resource, the value must match the client unique code used when the resource was created.
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
   * - T+1: generates instances the next day.
   * - Immediately: generates instances immediately. Note: only periodic instances whose scheduled time is more than 10 minutes after the node publish time are generated normally. During the full-to-instance conversion period (22:00–24:00), real-time instance conversion is not supported. You can submit and publish nodes, but new nodes are not automatically converted to instances.
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
   * The configuration that specifies whether the node can be rerun. Valid values:
   * 
   * 
   * 
   * 
   * - AllDenied: the node cannot be rerun regardless of whether it succeeds or fails.
   * - FailureAllowed: the node can be rerun only if it fails.
   * - AllAllowed: the node can be rerun regardless of whether it succeeds or fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect only when the node is configured to allow reruns.
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
   * The runtime script information.
   */
  scriptShrink?: string;
  /**
   * @remarks
   * The list of data asset tags to attach.
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

