// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseDataCorrectSQLJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task. You can call the [GetDataCorrectTaskDetail](https://help.aliyun.com/document_detail/208481.html) or [ListDBTaskSQLJob](https://help.aliyun.com/document_detail/207049.html) operation to obtain the value of this parameter.
   * 
   * >  If Type is set to SINGLE, you must pass in the value of JobId to confirm the ID of the SQL task that you want to pause.
   * 
   * @example
   * 43253
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the data change ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ID of the data change ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 43253
   */
  orderId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 4325
   */
  tid?: number;
  /**
   * @remarks
   * The type of the pause operation. Valid values:
   * 
   * *   ALL: pauses all SQL tasks.
   * *   SINGLE: pauses a single SQL task.
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      tid: 'Tid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      orderId: 'number',
      tid: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

