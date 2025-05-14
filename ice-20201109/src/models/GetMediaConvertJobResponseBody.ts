// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaConvertJobResponseBodyJob } from "./GetMediaConvertJobResponseBodyJob";


export class GetMediaConvertJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The transcoding task.
   */
  job?: GetMediaConvertJobResponseBodyJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4BAEA8E8-1C16-5CD3-AC50-CCBA81A53402
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetMediaConvertJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

