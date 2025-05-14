// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDynamicImageJobResponseBodyDynamicImageJob } from "./GetDynamicImageJobResponseBodyDynamicImageJob";


export class GetDynamicImageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the snapshot job.
   */
  dynamicImageJob?: GetDynamicImageJobResponseBodyDynamicImageJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******36-3C1E-4417-BDB2-1E034F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageJob: 'DynamicImageJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageJob: GetDynamicImageJobResponseBodyDynamicImageJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicImageJob && typeof (this.dynamicImageJob as any).validate === 'function') {
      (this.dynamicImageJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

