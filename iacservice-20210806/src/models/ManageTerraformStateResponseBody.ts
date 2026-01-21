// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageTerraformStateResponseBody extends $dara.Model {
  /**
   * @example
   * job-5fd38c9xxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A80B4F1-4E8C-515A-B3C1-0E1A9B85B6A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

