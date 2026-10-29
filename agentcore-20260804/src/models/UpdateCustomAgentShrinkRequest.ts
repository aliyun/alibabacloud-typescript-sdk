// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The update configuration for the custom agent. Specify at least one top-level field. Omitted top-level fields retain their original values. When you provide a configuration object, you must specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole.
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

