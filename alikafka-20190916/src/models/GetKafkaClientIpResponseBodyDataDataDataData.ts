// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetKafkaClientIpResponseBodyDataDataDataDataData } from "./GetKafkaClientIpResponseBodyDataDataDataDataData";


export class GetKafkaClientIpResponseBodyDataDataDataData extends $dara.Model {
  data?: GetKafkaClientIpResponseBodyDataDataDataDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetKafkaClientIpResponseBodyDataDataDataDataData },
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

