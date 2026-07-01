// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSnapshotFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of creation timestamps for the files to delete. You can specify up to 200 timestamps per request.
   * 
   * This parameter is required.
   */
  createTimestampListShrink?: string;
  /**
   * @remarks
   * Specifies whether to delete the original OSS files. The default value is false.
   * 
   * @example
   * true
   */
  deleteOriginalFile?: boolean;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * This parameter is required.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestampListShrink: 'CreateTimestampList',
      deleteOriginalFile: 'DeleteOriginalFile',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestampListShrink: 'string',
      deleteOriginalFile: 'boolean',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

