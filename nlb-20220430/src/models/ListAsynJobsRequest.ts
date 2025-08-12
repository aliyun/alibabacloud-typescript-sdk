// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsynJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The task IDs.
   */
  jobIds?: string[];
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: { 'type': 'array', 'itemType': 'string' },
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

