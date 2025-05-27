// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerListResponseBodyConsumerListConsumerVO } from "./GetConsumerListResponseBodyConsumerListConsumerVo";


export class GetConsumerListResponseBodyConsumerList extends $dara.Model {
  consumerVO?: GetConsumerListResponseBodyConsumerListConsumerVO[];
  static names(): { [key: string]: string } {
    return {
      consumerVO: 'ConsumerVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVO },
    };
  }

  validate() {
    if(Array.isArray(this.consumerVO)) {
      $dara.Model.validateArray(this.consumerVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

