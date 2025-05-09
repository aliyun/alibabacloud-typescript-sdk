// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail";
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList";
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail";
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail";


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The configurations of the ticket. This parameter is used to store the configuration information specific to a data change ticket type.
   */
  configDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail;
  /**
   * @remarks
   * The information about the database in which data is changed.
   */
  databaseList?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList;
  /**
   * @remarks
   * The execution mode of the ticket after the ticket is approved. Valid values:
   * 
   * - **COMMITOR**: The data change is performed by the user who submits the ticket.
   * - **AUTO**: The data change is automatically performed after the ticket is approved.
   * - **LAST_AUDITOR**: The data change is performed by the last approver of the ticket.
   * 
   * @example
   * COMMITOR
   */
  execMode?: string;
  /**
   * @remarks
   * The details of the ticket.
   */
  orderDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail;
  /**
   * @remarks
   * The precheck details of the ticket.
   */
  preCheckDetail?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail;
  /**
   * @remarks
   * The specific state of the data change ticket. Valid values:
   * 
   * >  The state of the ticket is not exactly equivalent to the status code for the ticket. To query the status code of the ticket, you can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/465868.html) operation and check the value of StatusCode in the response.
   * 
   * *   **new**: The ticket is created.
   * *   **precheck**: The ticket is in the pre-check phase.
   * *   **precheckFailed**: The ticket failed to pass the precheck.
   * *   **precheck_success**: The ticket passes the precheck and waits to be submitted for approval.
   * *   **toaudit**: The ticket is being reviewed.
   * *   **Approved**: The ticket is approved.
   * *   **reject**: The ticket is rejected.
   * *   **waiting**: The task is submitted and waits to be scheduled.
   * *   **processing**: The task is being executed.
   * *   **Success**: The task is successful.
   * 
   * @example
   * approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configDetail: 'ConfigDetail',
      databaseList: 'DatabaseList',
      execMode: 'ExecMode',
      orderDetail: 'OrderDetail',
      preCheckDetail: 'PreCheckDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetail,
      databaseList: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailDatabaseList,
      execMode: 'string',
      orderDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailOrderDetail,
      preCheckDetail: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail,
      status: 'string',
    };
  }

  validate() {
    if(this.configDetail && typeof (this.configDetail as any).validate === 'function') {
      (this.configDetail as any).validate();
    }
    if(this.databaseList && typeof (this.databaseList as any).validate === 'function') {
      (this.databaseList as any).validate();
    }
    if(this.orderDetail && typeof (this.orderDetail as any).validate === 'function') {
      (this.orderDetail as any).validate();
    }
    if(this.preCheckDetail && typeof (this.preCheckDetail as any).validate === 'function') {
      (this.preCheckDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

