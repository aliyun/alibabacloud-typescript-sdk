// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartPolarClawGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The restart mode. Valid values:
   * - in-process: lightweight restart without applying environment variable changes. This is the default value.
   * - pkill: cold start that applies environment variable changes.
   * 
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

