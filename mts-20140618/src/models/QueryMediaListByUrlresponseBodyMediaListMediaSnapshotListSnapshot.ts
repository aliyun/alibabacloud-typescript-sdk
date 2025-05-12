// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile } from "./QueryMediaListByUrlresponseBodyMediaListMediaSnapshotListSnapshotFile";


export class QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshot extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity that generates the snapshot.
   * 
   * @example
   * example-activity1-****
   */
  activityName?: string;
  /**
   * @remarks
   * The number of snapshots. This parameter is valid only when the value of the **Type** parameter is **Sequence**.
   * 
   * @example
   * 3
   */
  count?: string;
  /**
   * @remarks
   * The snapshot.
   */
  file?: QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile;
  /**
   * @remarks
   * The ID of the workflow that generates the snapshot.
   * 
   * @example
   * 6cc3aa66d1cb4bb2adf14e726c0a****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the snapshot.
   * 
   * @example
   * example-workflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * - **Single**: a single snapshot
   * - **Sequence**: snapshots in sequence
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      count: 'Count',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      count: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaSnapshotListSnapshotFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

