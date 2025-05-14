// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomizedVoiceJobsResponseBodyData } from "./ListCustomizedVoiceJobsResponseBodyData";


export class ListCustomizedVoiceJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListCustomizedVoiceJobsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCustomizedVoiceJobsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

