// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVodPackagingAssetsResponseBodyAssetsInput } from "./ListVodPackagingAssetsResponseBodyAssetsInput";


export class ListVodPackagingAssetsResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The name of the VOD packaging asset.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The time when the asset was ingested. It follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-11-21T06:45:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * movie 30min
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The asset input configurations.
   */
  input?: ListVodPackagingAssetsResponseBodyAssetsInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      input: ListVodPackagingAssetsResponseBodyAssetsInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

