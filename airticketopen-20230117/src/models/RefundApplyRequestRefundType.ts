// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundApplyRequestRefundType extends $dara.Model {
  /**
   * @remarks
   * attachment file URLs
   * 
   * (note: upload the files using a separate file upload interface to get the file URLs)
   * 
   * @example
   * [xxx,yyy]
   */
  file?: string[];
  /**
   * @remarks
   * refund type 
   * 
   * 2: voluntary (I want to change my travel plan/I don\\"t want to fly) 
   * 
   * 5: involuntary, due to flight delay or cancellation, schedule changes, etc., by the airline 
   * 
   * 6: involuntary, due to health reasons with a certificate from a hospital of at least secondary level A or above 
   * 
   *  (note: attachments are not mandatory, but it is recommended to provide them for involuntary refunds as they can increase the success rate)
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  refundTypeId?: number;
  /**
   * @remarks
   * remark
   * 
   * @example
   * remark desc
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      refundTypeId: 'refund_type_id',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: { 'type': 'array', 'itemType': 'string' },
      refundTypeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.file)) {
      $dara.Model.validateArray(this.file);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

