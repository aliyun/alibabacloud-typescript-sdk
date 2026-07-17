// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartPolarClawGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @example
   * in-process
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

