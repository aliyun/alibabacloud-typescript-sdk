// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDataTrackResultResponseBodyTrackResult } from "./SearchDataTrackResultResponseBodyTrackResult";


export class SearchDataTrackResultResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The parsing result of the data tracking task.
   */
  trackResult?: SearchDataTrackResultResponseBodyTrackResult;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      trackResult: 'TrackResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      trackResult: SearchDataTrackResultResponseBodyTrackResult,
    };
  }

  validate() {
    if(this.trackResult && typeof (this.trackResult as any).validate === 'function') {
      (this.trackResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

