// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretNoDetailRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * Log on to the Phone Number Protection console and obtain the **Number Pool Key** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2258****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The privacy number, which is the X number.
   * 
   * Log on to the Phone Number Protection console and obtain the X number on the [Number Management](https://dyplsnext.console.aliyun.com/number/list) page. Alternatively, view the **SecretNo** parameter in the response when you call a number binding operation such as [BindAxb](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb).
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

