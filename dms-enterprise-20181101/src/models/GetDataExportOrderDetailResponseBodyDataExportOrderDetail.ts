// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo } from "./GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo";
import { GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail } from "./GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail";


export class GetDataExportOrderDetailResponseBodyDataExportOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The status information.
   */
  keyInfo?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo;
  /**
   * @remarks
   * The details of the ticket.
   */
  orderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail;
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
      orderDetail: 'OrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo,
      orderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail,
    };
  }

  validate() {
    if(this.keyInfo && typeof (this.keyInfo as any).validate === 'function') {
      (this.keyInfo as any).validate();
    }
    if(this.orderDetail && typeof (this.orderDetail as any).validate === 'function') {
      (this.orderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

