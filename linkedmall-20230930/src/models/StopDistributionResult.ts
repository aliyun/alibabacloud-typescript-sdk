// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionProduct } from "./DistributionProduct";


export class StopDistributionResult extends $dara.Model {
  code?: string;
  message?: string;
  products?: DistributionProduct[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      products: 'products',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

