// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEditMediaManifestJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The manifest editing task ID, which is the MediaConvert pipeline task ID.
   * 
   * @example
   * 93e154cb83e54b7a0f1236f847f4****
   */
  manifestEditJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      manifestEditJobId: 'ManifestEditJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestEditJobId: 'string',
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

