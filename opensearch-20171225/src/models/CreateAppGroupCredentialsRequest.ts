// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupCredentialsRequest extends $dara.Model {
  /**
   * @example
   * api-token
   */
  type?: string;
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

