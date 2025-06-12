// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSchemasResponseBodyItems } from "./DescribeSchemasResponseBodyItems";


export class DescribeSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the databases of the cluster.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
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

