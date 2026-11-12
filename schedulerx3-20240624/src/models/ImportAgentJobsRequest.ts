// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAgentJobsRequest extends $dara.Model {
  /**
   * @remarks
   * agentname
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  agentName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2027179f-20b1-4e0b-841b-d86f2bc7ebf7
   */
  clusterId?: string;
  /**
   * @remarks
   * The strategy for synchronizing scheduled tasks. Valid values:  
   * - 1: Migrates both the content and the scheduling time of local scheduled tasks from the agent to the cloud.  
   * - 2: Migrates only the scheduling time to the cloud. When the scheduled time arrives, the platform notifies the agent, and the agent executes the task based on the local task content. The task content is always retained locally.
   * 
   * @example
   * 1
   */
  migrateStrategy?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      clusterId: 'ClusterId',
      migrateStrategy: 'MigrateStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      clusterId: 'string',
      migrateStrategy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

