// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAuditRequest extends $dara.Model {
  /**
   * @remarks
   * 扩展参数JSON字符串
   * 
   * @example
   * {}
   */
  ext?: string;
  /**
   * @remarks
   * OSS文件Key，与url参数二选一
   * 
   * @example
   * video/test.mp4
   */
  fileKey?: string;
  /**
   * @remarks
   * 抽帧间隔时间（秒）
   * 
   * @example
   * 1.0
   */
  snapshotInterval?: number;
  /**
   * @remarks
   * 视频URL地址，与fileKey参数二选一
   * 
   * @example
   * https://example.com/video.mp4
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      fileKey: 'FileKey',
      snapshotInterval: 'SnapshotInterval',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      fileKey: 'string',
      snapshotInterval: 'number',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

