// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The maximum length is 256 characters.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * External ID of the organization, which is used for association with an external system. The default value is the organization ID. The maximum length is 64 characters.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * Organization name. The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitName: 'OrganizationalUnitName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
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

