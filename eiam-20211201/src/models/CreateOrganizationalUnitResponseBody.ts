// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

