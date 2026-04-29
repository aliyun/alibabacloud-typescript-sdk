// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePolarClawMCPServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-v1
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

