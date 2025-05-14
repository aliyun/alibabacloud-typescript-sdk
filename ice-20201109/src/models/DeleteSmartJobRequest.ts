// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmartJobRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the jobs to delete. Separate multiple IDs with commas (,).
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******042d5e4db6866f6289d1******
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

