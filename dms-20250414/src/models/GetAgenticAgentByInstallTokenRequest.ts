// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticAgentByInstallTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  installToken?: string;
  static names(): { [key: string]: string } {
    return {
      installToken: 'InstallToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

