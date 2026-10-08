// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskOperationLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The date of the operation, accurate to the day. Default value: the current day. You can query operation logs from the past 31 days. The value is a timestamp.
   * 
   * @example
   * 1710239005403
   */
  date?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

