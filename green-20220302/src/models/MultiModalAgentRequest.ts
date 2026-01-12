// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentRequest extends $dara.Model {
  /**
   * @example
   * txt_check_agent_01
   */
  appID?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

