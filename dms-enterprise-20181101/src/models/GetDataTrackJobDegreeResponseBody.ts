// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataTrackJobDegreeResponseBodyJobDegree } from "./GetDataTrackJobDegreeResponseBodyJobDegree";


export class GetDataTrackJobDegreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress details of the data tracking task.
   */
  jobDegree?: GetDataTrackJobDegreeResponseBodyJobDegree;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C51420E3-144A-4A94-B473-8662FCF4AD10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobDegree: 'JobDegree',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobDegree: GetDataTrackJobDegreeResponseBodyJobDegree,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobDegree && typeof (this.jobDegree as any).validate === 'function') {
      (this.jobDegree as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

