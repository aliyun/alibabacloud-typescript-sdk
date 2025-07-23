// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAivppAlgoJobRequest extends $dara.Model {
  /**
   * @example
   * 5854bfa6-f002-43c2-8e1d-e9b2c28f9384
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

