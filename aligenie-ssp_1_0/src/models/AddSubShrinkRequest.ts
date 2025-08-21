// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSubShrinkRequest extends $dara.Model {
  addSubscriptionInfoRequestShrink?: string;
  deviceInfoShrink?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addSubscriptionInfoRequestShrink: 'AddSubscriptionInfoRequest',
      deviceInfoShrink: 'DeviceInfo',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSubscriptionInfoRequestShrink: 'string',
      deviceInfoShrink: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

