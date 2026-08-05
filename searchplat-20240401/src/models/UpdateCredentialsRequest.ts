// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the credential is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

