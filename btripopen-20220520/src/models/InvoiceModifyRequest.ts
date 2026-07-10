// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceModifyRequest extends $dara.Model {
  address?: string;
  bankName?: string;
  bankNo?: string;
  mailThirdPartId?: string;
  taxNo?: string;
  tel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  thirdPartId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: number;
  unitType?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bankName: 'bank_name',
      bankNo: 'bank_no',
      mailThirdPartId: 'mail_third_part_id',
      taxNo: 'tax_no',
      tel: 'tel',
      thirdPartId: 'third_part_id',
      title: 'title',
      type: 'type',
      unitType: 'unit_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bankName: 'string',
      bankNo: 'string',
      mailThirdPartId: 'string',
      taxNo: 'string',
      tel: 'string',
      thirdPartId: 'string',
      title: 'string',
      type: 'number',
      unitType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

