// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoAuditRequest extends $dara.Model {
  /**
   * @remarks
   * Extension parameters
   * 
   * @example
   * {}
   */
  ext?: string;
  /**
   * @remarks
   * Unique file identity within the Miaobi system (choose either FileKey or URL)
   * 
   * @example
   * oss://default/xxx/video/test.mp4
   */
  fileKey?: string;
  /**
   * @remarks
   * Snapshot interval
   * 
   * @example
   * 1.0
   */
  snapshotInterval?: number;
  /**
   * @remarks
   * Video URL (choose either FileKey or URL)
   * 
   * @example
   * https://example.com/video.mp4
   */
  url?: string;
  /**
   * @remarks
   * Workspace ID
   * 
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

