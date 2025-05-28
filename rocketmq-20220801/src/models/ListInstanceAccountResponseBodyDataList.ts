// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAccountResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * Valid values:
   *   - DISABLE
   *   - ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The account type.
   *   - CUSTOMER
   *   - DEFAULT
   * 
   * @example
   * CUSTOMER
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      instanceId: 'instanceId',
      regionId: 'regionId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

