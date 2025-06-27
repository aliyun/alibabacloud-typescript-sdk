// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceOwnerUidResponseBodyOwnerInfos extends $dara.Model {
  /**
   * @example
   * 125************21
   */
  ownerUserId?: string;
  /**
   * @example
   * a.com-waf
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUserId: 'OwnerUserId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUserId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

