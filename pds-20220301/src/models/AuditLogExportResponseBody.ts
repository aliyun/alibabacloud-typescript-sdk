// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditLogExportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task used to export audit logs.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d31****
   */
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

