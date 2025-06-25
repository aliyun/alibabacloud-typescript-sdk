// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindInfoResponseBodyBindInfoModels extends $dara.Model {
  /**
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @example
   * ca-fq738or6vd854****
   */
  appId?: string;
  /**
   * @example
   * aig-0abxhr6ce35w8****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-83oe276fre4l3****
   */
  appInstanceId?: string;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * Alice
   */
  userId?: string;
  /**
   * @example
   * 2ca6f5a93536****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      productType: 'ProductType',
      regionId: 'RegionId',
      userId: 'UserId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      productType: 'string',
      regionId: 'string',
      userId: 'string',
      wyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

