// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The name or ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * my_app_group_name
   */
  appGroupIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupIdentity: 'appGroupIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupIdentity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

