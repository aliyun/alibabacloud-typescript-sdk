// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SanityCheckResultItem } from "./SanityCheckResultItem";


export class GetJobSanityCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3789344-F1xxxBE-5xx2-A04D-xxxxx
   */
  requestID?: string;
  /**
   * @remarks
   * The job sanity check result.
   */
  sanityCheckResult?: SanityCheckResultItem[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestID: 'RequestID',
      sanityCheckResult: 'SanityCheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestID: 'string',
      sanityCheckResult: { 'type': 'array', 'itemType': SanityCheckResultItem },
    };
  }

  validate() {
    if(Array.isArray(this.sanityCheckResult)) {
      $dara.Model.validateArray(this.sanityCheckResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

