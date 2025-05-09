// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdhocWorkflowInstanceRequestTasksDependencies extends $dara.Model {
  /**
   * @remarks
   * The identifier of the output of the ancestor task.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  static names(): { [key: string]: string } {
    return {
      upstreamOutput: 'UpstreamOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upstreamOutput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

