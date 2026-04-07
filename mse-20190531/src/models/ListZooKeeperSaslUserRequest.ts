// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZooKeeperSaslUserRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mse-cn-5bffa4e8630
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

