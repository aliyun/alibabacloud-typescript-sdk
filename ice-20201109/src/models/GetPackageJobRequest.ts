// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID. You can obtain the job ID from the response parameters of the [SubmitPackageJob](https://help.aliyun.com/document_detail/461964.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

