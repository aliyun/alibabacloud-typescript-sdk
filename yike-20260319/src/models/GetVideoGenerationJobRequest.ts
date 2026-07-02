// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoGenerationJobRequest extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  clientToken?: string;
  /**
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

