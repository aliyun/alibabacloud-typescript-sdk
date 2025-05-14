// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSnapshotFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of timestamps when the jobs were created. The values are UNIX timestamps representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A maximum of 200 jobs can be deleted at a time.
   * 
   * This parameter is required.
   */
  createTimestampListShrink?: string;
  /**
   * @remarks
   * Specifies whether to delete the original files at the same time. Default value: false.
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

