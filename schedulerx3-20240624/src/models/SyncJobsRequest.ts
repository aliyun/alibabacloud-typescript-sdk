// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncJobsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of job IDs.
   * 
   * This parameter is required.
   */
  jobIds?: number[];
  /**
   * @remarks
   * The name of the source application that contains the jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * test-source
   */
  originalAppName?: string;
  /**
   * @remarks
   * The ID of the source cluster that contains the jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-00ed7f0d742b1
   */
  originalClusterId?: string;
  /**
   * @remarks
   * The name of the destination application.
   * 
   * This parameter is required.
   * 
   * @example
   * test-target
   */
  targetAppName?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-008bfb1541111
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      originalAppName: 'OriginalAppName',
      originalClusterId: 'OriginalClusterId',
      targetAppName: 'TargetAppName',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: { 'type': 'array', 'itemType': 'number' },
      originalAppName: 'string',
      originalClusterId: 'string',
      targetAppName: 'string',
      targetClusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIds)) {
      $dara.Model.validateArray(this.jobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

