// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateDNSResponseBodyPrivateDNSListRecords extends $dara.Model {
  /**
   * @remarks
   * The resolution record.
   * 
   * @example
   * 192.168.0.1
   */
  record?: string;
  /**
   * @remarks
   * The weight of the record.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

