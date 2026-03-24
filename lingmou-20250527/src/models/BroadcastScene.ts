// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastScene extends $dara.Model {
  /**
   * @example
   * {}
   */
  clipInfo?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/BS1CQEYXYQW4MQU2/cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2026-03-24T11:21:27.691732
   */
  createTime?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/BS1CQEYXYQW4MQU2/result.mp4
   */
  downloadURL?: string;
  /**
   * @example
   * BS1WgG5zb-N1GI8nId3r6wo8g
   */
  id?: string;
  /**
   * @example
   * 2026-03-24T11:21:27.691732
   */
  modifiedTime?: string;
  name?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/BS1CQEYXYQW4MQU2/preview.mp4
   */
  previewURL?: string;
  /**
   * @example
   * 9:16
   */
  ratio?: string;
  /**
   * @example
   * 300
   */
  remainSeconds?: number;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/BS1CQEYXYQW4MQU2/result.mp4
   */
  shortVideoURL?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/BS1CQEYXYQW4MQU2/thumbnail.jpg
   */
  thumbnailURL?: string;
  /**
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      clipInfo: 'clipInfo',
      coverURL: 'coverURL',
      createTime: 'createTime',
      downloadURL: 'downloadURL',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      previewURL: 'previewURL',
      ratio: 'ratio',
      remainSeconds: 'remainSeconds',
      shortVideoURL: 'shortVideoURL',
      status: 'status',
      thumbnailURL: 'thumbnailURL',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfo: 'string',
      coverURL: 'string',
      createTime: 'string',
      downloadURL: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      previewURL: 'string',
      ratio: 'string',
      remainSeconds: 'number',
      shortVideoURL: 'string',
      status: 'string',
      thumbnailURL: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

