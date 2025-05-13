// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectableClusterRequest extends $dara.Model {
  /**
   * @remarks
   * 请求体。
   * 
   * @example
   * {     "instanceId":"es-cn-09k1rgid9000g****" }
   */
  body?: string;
  /**
   * @remarks
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF\\*\\*\\*\\*
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

