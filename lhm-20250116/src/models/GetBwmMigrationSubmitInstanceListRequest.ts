// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBwmMigrationSubmitInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * 7
   */
  status?: number;
  /**
   * @remarks
   * The conversion task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

