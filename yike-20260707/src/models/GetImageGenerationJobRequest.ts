// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageGenerationJobRequest extends $dara.Model {
  /**
   * @example
   * 68ca759e798b40b4903b255*******
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

