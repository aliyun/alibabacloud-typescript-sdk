// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteWorkflowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 111111
   */
  wfInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      wfInstanceId: 'WfInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

