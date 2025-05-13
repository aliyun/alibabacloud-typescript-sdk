// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobInstanceListResponseBodyDataJobInstanceDetails } from "./GetJobInstanceListResponseBodyDataJobInstanceDetails";


export class GetJobInstanceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the job instance.
   */
  jobInstanceDetails?: GetJobInstanceListResponseBodyDataJobInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetails: 'JobInstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetails: { 'type': 'array', 'itemType': GetJobInstanceListResponseBodyDataJobInstanceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.jobInstanceDetails)) {
      $dara.Model.validateArray(this.jobInstanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

