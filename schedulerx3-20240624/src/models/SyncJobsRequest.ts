// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of node IDs.
   * 
   * This parameter is required.
   */
  jobIds?: number[];
  /**
   * @remarks
   * The name of the original application where the nodes are located.
   * 
   * This parameter is required.
   * 
   * @example
   * test-source
   */
  originalAppName?: string;
  /**
   * @remarks
   * The ID of the original cluster where the nodes are located.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-00ed7f0d742b1
   */
  originalClusterId?: string;
  /**
   * @remarks
   * The name of the target application to which the nodes are synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * test-target
   */
  targetAppName?: string;
  /**
   * @remarks
   * The ID of the target cluster to which the nodes are synchronized.
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

