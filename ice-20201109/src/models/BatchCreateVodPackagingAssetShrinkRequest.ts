// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateVodPackagingAssetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VOD packaging asset configurations.
   */
  assetsShrink?: string;
  /**
   * @remarks
   * The name of the VOD packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      assetsShrink: 'Assets',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsShrink: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

