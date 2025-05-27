// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKafkaClientIpResponseBodyDataDataDataDataData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 58.210.117.154
   */
  ip?: string;
  /**
   * @remarks
   * The statistics.
   * 
   * >  The value of this parameter indicates the number of connections on different ports of the IP address within the specified period of time.
   * 
   * @example
   * 3
   */
  num?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      num: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

