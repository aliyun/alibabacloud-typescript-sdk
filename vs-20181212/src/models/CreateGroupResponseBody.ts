// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 31000000****00000001
   */
  gbId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @example
   * 5060
   */
  gbPort?: number;
  /**
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

