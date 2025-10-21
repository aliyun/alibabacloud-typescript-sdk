// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartJobRequestBody } from "./StartJobRequestBody";


export class StartJobRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to start the job.
   * 
   * This parameter is required.
   */
  body?: StartJobRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: StartJobRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

