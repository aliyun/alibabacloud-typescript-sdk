// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateExecuteJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobExecutionId: 'JobExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

