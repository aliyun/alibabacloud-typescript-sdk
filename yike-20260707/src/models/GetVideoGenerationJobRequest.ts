// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * 818**811
   */
  clientToken?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ag_68ca759b4903b255*******
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

