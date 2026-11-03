// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHistoryJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * manual-3db7a8fa-5d40-4edc-92e4-49d50eab****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

