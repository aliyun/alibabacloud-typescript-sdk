// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskOperationLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation date, accurate to the day. The default value is the current day. You can query only the operation logs generated within the previous 31 days.
   * 
   * @example
   * 1710239005403
   */
  date?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
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

