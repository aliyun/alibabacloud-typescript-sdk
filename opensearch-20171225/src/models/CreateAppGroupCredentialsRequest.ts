// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The credential type, such as \\`api-key\\`, \\`account\\`, \\`invoke-key\\`, or \\`api-token\\`. To create an API key, set this parameter to \\`api-token\\`.
   * 
   * @example
   * api-token
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. In a dry run, the system checks the request parameters but does not execute the operation.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

