// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmartClipTaskResponseBodyDataSubJobs } from "./GetSmartClipTaskResponseBodyDataSubJobs";


export class GetSmartClipTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  subJobs?: GetSmartClipTaskResponseBodyDataSubJobs[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      subJobs: 'SubJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      subJobs: { 'type': 'array', 'itemType': GetSmartClipTaskResponseBodyDataSubJobs },
    };
  }

  validate() {
    if(Array.isArray(this.subJobs)) {
      $dara.Model.validateArray(this.subJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

