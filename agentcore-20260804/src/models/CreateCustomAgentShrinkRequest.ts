// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON configuration of the custom agent. You must specify name, artifact, roleArn, and runtime.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * Idempotence is not currently guaranteed. Do not rely on this parameter to prevent duplicate requests.
   * 
   * @example
   * custom-agent-request-20261010-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

