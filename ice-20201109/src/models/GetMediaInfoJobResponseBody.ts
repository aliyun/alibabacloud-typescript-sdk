// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoJobResponseBodyMediaInfoJob } from "./GetMediaInfoJobResponseBodyMediaInfoJob";


export class GetMediaInfoJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * MediaInfoJobDTO
   */
  mediaInfoJob?: GetMediaInfoJobResponseBodyMediaInfoJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: GetMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfoJob && typeof (this.mediaInfoJob as any).validate === 'function') {
      (this.mediaInfoJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

