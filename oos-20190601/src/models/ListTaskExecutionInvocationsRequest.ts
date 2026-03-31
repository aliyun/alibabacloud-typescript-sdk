// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskExecutionInvocationsRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * exec-a10749813b3xxxxx.t0001
   */
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      taskExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

