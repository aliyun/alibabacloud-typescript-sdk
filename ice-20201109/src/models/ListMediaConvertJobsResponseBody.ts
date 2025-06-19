// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertJobWithoutDetail } from "./MediaConvertJobWithoutDetail";


export class ListMediaConvertJobsResponseBody extends $dara.Model {
  jobs?: MediaConvertJobWithoutDetail[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': MediaConvertJobWithoutDetail },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

