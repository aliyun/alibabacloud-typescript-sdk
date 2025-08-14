// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelIProductionJobRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
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

