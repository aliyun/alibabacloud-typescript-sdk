// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetKafkaClientIpResponseBodyDataDataData } from "./GetKafkaClientIpResponseBodyDataDataData";


export class GetKafkaClientIpResponseBodyDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

