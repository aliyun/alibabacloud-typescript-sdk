// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeMemberBizChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  memberId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainInfo: 'BizChainInfo',
      memberId: 'MemberId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainInfo: 'string',
      memberId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

