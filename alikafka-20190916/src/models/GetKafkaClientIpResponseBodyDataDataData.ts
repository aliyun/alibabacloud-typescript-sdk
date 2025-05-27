// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetKafkaClientIpResponseBodyDataDataDataData } from "./GetKafkaClientIpResponseBodyDataDataDataData";


export class GetKafkaClientIpResponseBodyDataDataData extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetKafkaClientIpResponseBodyDataDataDataData;
  /**
   * @remarks
   * The request name.
   * 
   * >  The value of this parameter indicates the type of request that the client sends to the broker within the specified period of time.
   * 
   * @example
   * OFFSET_COMMIT
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetKafkaClientIpResponseBodyDataDataDataData,
      name: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

