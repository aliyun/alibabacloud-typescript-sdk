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

export class DescribeDefenseResourceOwnerUidResponseBody extends $dara.Model {
  ownerInfos?: DescribeDefenseResourceOwnerUidResponseBodyOwnerInfos[];
  /**
   * @example
   * 7326952B-B83B-5B7C-84FA-77F3E17310A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerInfos: 'OwnerInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerInfos: { 'type': 'array', 'itemType': DescribeDefenseResourceOwnerUidResponseBodyOwnerInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerInfos)) {
      $dara.Model.validateArray(this.ownerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

