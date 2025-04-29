// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceSearchRequest extends $dara.Model {
  thirdPartId?: string;
  title?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartId: 'third_part_id',
      title: 'title',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartId: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

