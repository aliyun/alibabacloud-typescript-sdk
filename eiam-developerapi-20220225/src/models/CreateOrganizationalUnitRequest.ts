// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used to map external data to the data of the organizational unit in Employee Identity and Access Management (EIAM) of Identity as a Service (IDaaS). By default, the external ID is the organizational unit ID.
   * 
   * For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitName: 'organizationalUnitName',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitName: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

