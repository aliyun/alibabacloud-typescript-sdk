// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeDeviceGroupBizChainRequest extends $dara.Model {
  bizChainIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainIdList: 'BizChainIdList',
      deviceGroupId: 'DeviceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainIdList: 'string',
      deviceGroupId: 'string',
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

