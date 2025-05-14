// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarTrainingJobsRequest extends $dara.Model {
  /**
   * @remarks
   * *   The page number.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * *   The number of entries per page.
   * *   Default value: 10.
   * *   Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * *   The job state.
   * *   Valid values: Init, Queuing, Training, Success, and Fail.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

