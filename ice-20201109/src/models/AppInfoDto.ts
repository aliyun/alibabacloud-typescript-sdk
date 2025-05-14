// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppInfoDTOPlatforms } from "./AppInfoDtoplatforms";


export class AppInfoDTO extends $dara.Model {
  appName?: string;
  /**
   * @example
   * 1-普通应用，2-内嵌SDK.
   */
  appType?: number;
  gmtCreate?: string;
  itemId?: string;
  platforms?: AppInfoDTOPlatforms[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      gmtCreate: 'GmtCreate',
      itemId: 'ItemId',
      platforms: 'Platforms',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'number',
      gmtCreate: 'string',
      itemId: 'string',
      platforms: { 'type': 'array', 'itemType': AppInfoDTOPlatforms },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

