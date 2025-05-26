// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSchemasResponseBodyItems } from "./DescribeSchemasResponseBodyItems";


export class DescribeSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried databases.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSchemasResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

