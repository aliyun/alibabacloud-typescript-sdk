// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The credential type. Valid types:
   * - api-token
   * 
   * @example
   * api-token
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to only validate the request parameters. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**: Only validates the request parameters.
   * 
   * - **false**: Validates the request parameters and creates the attribution configuration.
   * 
   * @example
   * true
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

