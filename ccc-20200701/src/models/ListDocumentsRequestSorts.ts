// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsRequestSorts extends $dara.Model {
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * name
   */
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      propertyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

