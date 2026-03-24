// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastSceneTemplate extends $dara.Model {
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CSNSAsOIDZQU2/cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2026-01-06T07:00:02Z
   */
  createTime?: string;
  desc?: string;
  /**
   * @example
   * BS1tneDiuOOjJmI2qOHGw1urA
   */
  id?: string;
  /**
   * @example
   * 2026-01-06T07:00:02Z
   */
  modifiedTime?: string;
  name?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CSNSAsOIDZQU2/result.mp4
   */
  previewURL?: string;
  /**
   * @example
   * 9:16
   */
  ratio?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CSNSAsOIDZQU2/result_preview.mp4
   */
  shortVideoURL?: string;
  tags?: string[];
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CSNSAsOIDZQU2/thumbnail.jpg
   */
  thumbnailURL?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'coverURL',
      createTime: 'createTime',
      desc: 'desc',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      previewURL: 'previewURL',
      ratio: 'ratio',
      shortVideoURL: 'shortVideoURL',
      tags: 'tags',
      thumbnailURL: 'thumbnailURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      createTime: 'string',
      desc: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      previewURL: 'string',
      ratio: 'string',
      shortVideoURL: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      thumbnailURL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

