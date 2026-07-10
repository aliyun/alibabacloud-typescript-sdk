// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, used to uniquely identify a node. This code is used to implement asynchronous operations and idempotence. If not specified during creation, the system automatically generates one, and the code is uniquely bound to the resource ID. When updating or deleting a resource, if this parameter is specified, it must be consistent with the client unique code used during creation.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
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
   * test
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
   * 1234
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
   * - T+1: The instance is generated the next day.
   * - Immediately: The instance is generated immediately. Note: Only periodic instances whose scheduled time is at least ten minutes after the node publish time are generated normally. During the full instance generation period (22:00 to 24:00), real-time instance generation is not available. You can submit and publish nodes, but new nodes do not automatically generate instances.
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
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputsShrink?: string;
  /**
   * @remarks
   * The account ID of the node owner.
   * 
   * @example
   * 1000
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
   * - FailureAllowed: The node can be rerun only when it fails.
   * - AllAllowed: The node can be rerun regardless of whether it succeeds or fails.
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
   * The environment configuration, such as resource group information.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The script information.
   */
  scriptShrink?: string;
  /**
   * @remarks
   * The list of node tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The node execution timeout period, in seconds. The value must be greater than 3600.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The node trigger method.
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

