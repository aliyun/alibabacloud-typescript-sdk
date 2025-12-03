// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  organizationMemberName?: string;
  static names(): { [key: string]: string } {
    return {
      organizationMemberName: 'organizationMemberName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationMemberName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

