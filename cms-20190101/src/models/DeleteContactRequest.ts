// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * John Doe
   */
  contactName?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
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

