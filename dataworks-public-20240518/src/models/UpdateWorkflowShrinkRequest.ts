// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the workflow, used for asynchronous operations and idempotence. If not specified during creation, the system automatically generates one, and the code is uniquely bound to the resource ID. If this parameter is specified during update or deletion, it must be consistent with the client unique code used during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
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
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * - T+1: Instances are generated the next day.
   * - Immediately: Instances are generated immediately. Periodic instances are generated only if the scheduled time of the workflow is at least 10 minutes after the workflow is published. During the full instance generation period (22:00 to 24:00), real-time instance generation is not available. You can submit and publish workflows during this period, but instances are not regenerated after submission.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * My Workflow
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputsShrink?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The parameter list.
   * 
   * @example
   * para1=$bizdate para2=$[yyyymmdd]
   */
  parameters?: string;
  /**
   * @remarks
   * The list of workflow tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The node list.
   */
  tasksShrink?: string;
  /**
   * @remarks
   * The trigger configuration.
   * 
   * This parameter is required.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      dependenciesShrink: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      instanceMode: 'InstanceMode',
      name: 'Name',
      outputsShrink: 'Outputs',
      owner: 'Owner',
      parameters: 'Parameters',
      tagsShrink: 'Tags',
      tasksShrink: 'Tasks',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      dependenciesShrink: 'string',
      description: 'string',
      envType: 'string',
      id: 'number',
      instanceMode: 'string',
      name: 'string',
      outputsShrink: 'string',
      owner: 'string',
      parameters: 'string',
      tagsShrink: 'string',
      tasksShrink: 'string',
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

