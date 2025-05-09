// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDataCorrectSQLJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task. You can call the [GetDataCorrectTaskDetail](https://help.aliyun.com/document_detail/208481.html) and [ListDBTaskSQLJob](https://help.aliyun.com/document_detail/207049.html) operations to obtain the value of this parameter.
   * 
   * If the Type parameter is set to SINGLE, you must pass the value of the JobId parameter to confirm the ID of the SQL task that you want to rerun.
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
   * 453****
   */
  orderId?: number;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The type of the rerun operation. Valid values:
   * 
   * *   **ALL**: reruns all SQL tasks.
   * *   **SINGLE**: reruns a single SQL task.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      orderId: 'number',
      realLoginUserUid: 'string',
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

