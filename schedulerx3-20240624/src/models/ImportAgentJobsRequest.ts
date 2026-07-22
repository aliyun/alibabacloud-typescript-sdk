// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAgentJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 名称
   */
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2027179f-20b1-4e0b-841b-d86f2bc7ebf7
   */
  clusterId?: string;
  /**
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

