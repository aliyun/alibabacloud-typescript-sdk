// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkOssV2ResultRequest extends $dara.Model {
  /**
   * @example
   * 2023-10-21 16:08:38 +0800
   */
  endDate?: string;
  /**
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @example
   * freeze
   */
  operation?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestIds?: string;
  /**
   * @example
   * 2023-08-21 16:08:38 +0800
   */
  startDate?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      freezeType: 'FreezeType',
      operation: 'Operation',
      requestIds: 'RequestIds',
      startDate: 'StartDate',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      freezeType: 'string',
      operation: 'string',
      requestIds: 'string',
      startDate: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

