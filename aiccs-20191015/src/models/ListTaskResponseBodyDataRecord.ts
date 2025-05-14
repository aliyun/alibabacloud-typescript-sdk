// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskResponseBodyDataRecord extends $dara.Model {
  /**
   * @example
   * 1
   */
  completeCount?: number;
  /**
   * @example
   * 1618477232000
   */
  fireTime?: string;
  /**
   * @example
   * 1618477232000
   */
  gmtCreate?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 123456
   */
  robotId?: number;
  robotName?: string;
  /**
   * @example
   * RELEASE
   */
  status?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completeCount: 'CompleteCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      robotId: 'RobotId',
      robotName: 'RobotName',
      status: 'Status',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      id: 'number',
      robotId: 'number',
      robotName: 'string',
      status: 'string',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

