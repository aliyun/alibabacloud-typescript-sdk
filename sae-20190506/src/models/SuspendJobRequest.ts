// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template.
   * 
   * This parameter is required.
   * 
   * @example
   * ee1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @remarks
   * Start or suspend a job template.
   * 
   * *   true: Start a job template.
   * *   false: Suspend a job template.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  suspend?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      suspend: 'Suspend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      suspend: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

