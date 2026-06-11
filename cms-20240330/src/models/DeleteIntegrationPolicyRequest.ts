// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIntegrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete the cloud native appliance.
   * Default: `false`.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

