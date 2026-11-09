// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID. Only queued tasks can be canceled.
   * 
   * This parameter is required.
   * 
   * @example
   * ag_77b5f78b***
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

