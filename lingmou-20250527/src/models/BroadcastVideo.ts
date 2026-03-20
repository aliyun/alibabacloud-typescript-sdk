// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BroadcastVideo extends $dara.Model {
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CQEYXYQW4MQU2/alignment.json
   */
  alignmentFileURL?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CQEYXYQW4MQU2/result.srt
   */
  captionURL?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CQEYXYQW4MQU2/cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2025-11-28T13:40:33
   */
  createTime?: string;
  /**
   * @example
   * M1k3So6n9IlrDV69sr3jDa3g
   */
  id?: string;
  /**
   * @example
   * 2025-11-28T13:41:31
   */
  modifiedTime?: string;
  name?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * https://online-avatar-property.oss-cn-beijing.aliyuncs.com/aigc_material/OUTPUT_BROADCAST_SHORT_VIDEO/Mt.CQEYXYQW4MQU2/result.mp4
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentFileURL: 'alignmentFileURL',
      captionURL: 'captionURL',
      coverURL: 'coverURL',
      createTime: 'createTime',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      status: 'status',
      videoURL: 'videoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentFileURL: 'string',
      captionURL: 'string',
      coverURL: 'string',
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      videoURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

