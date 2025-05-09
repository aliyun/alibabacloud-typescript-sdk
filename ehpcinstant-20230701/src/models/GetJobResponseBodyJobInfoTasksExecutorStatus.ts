// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoTasksExecutorStatus extends $dara.Model {
  /**
   * @example
   * 0
   */
  arrayId?: number;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  createTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  endTime?: string;
  /**
   * @example
   * 2024-02-04 13:54:10
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Creating executor
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      arrayId: 'ArrayId',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayId: 'number',
      createTime: 'string',
      endTime: 'string',
      startTime: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

