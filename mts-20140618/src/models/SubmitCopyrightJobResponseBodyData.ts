// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * bfb786c639894f4d80648792021e****
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

