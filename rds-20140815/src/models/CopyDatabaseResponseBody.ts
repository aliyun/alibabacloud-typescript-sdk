// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test02
   */
  DBName?: string;
  /**
   * @remarks
   * The database status. Valid values:
   * * **Creating**: The database is being created.
   * * **Running**: The database is running.
   * * **Deleting**: The database is being deleted.
   * 
   * @example
   * Creating
   */
  DBStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2562****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      DBStatus: 'string',
      requestId: 'string',
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

