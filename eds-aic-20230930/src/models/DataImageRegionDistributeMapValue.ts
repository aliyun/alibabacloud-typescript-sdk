// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataImageRegionDistributeMapValue extends $dara.Model {
  /**
   * @remarks
   * The status of the image distribution task.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The task is ready.
   * *   DELETE: The task is deleted.
   * *   INIT: The task is being initialized.
   * *   CREATE_FAILED: The task failed to be created.
   * *   CREATING: The task is being created.
   * 
   * @example
   * AVAILABLE
   */
  distributeStatus?: string;
  /**
   * @remarks
   * The distribution progress of the image.
   * 
   * @example
   * 100%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      distributeStatus: 'DistributeStatus',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStatus: 'string',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

