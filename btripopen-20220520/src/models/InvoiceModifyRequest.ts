// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceModifyRequest extends $dara.Model {
  address?: string;
  /**
   * @example
   * 12345678
   */
  bankName?: string;
  /**
   * @example
   * 2222
   */
  bankNo?: string;
  /**
   * @example
   * 122333121
   */
  taxNo?: string;
  /**
   * @example
   * 12345678
   */
  tel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340049
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
   * 
   * @example
   * 1
   */
  type?: number;
  unitType?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bankName: 'bank_name',
      bankNo: 'bank_no',
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

