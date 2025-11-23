// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TryRunTaskFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The task flow ID. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the ID of the task flow.
   * 
   * @example
   * 11****
   */
  dagId?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

