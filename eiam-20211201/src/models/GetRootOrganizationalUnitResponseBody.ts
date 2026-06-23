// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRootOrganizationalUnitResponseBodyOrganizationalUnit extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organization
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organizational unit ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The organizational unit name.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organizational unit data object.
   */
  organizationalUnit?: GetRootOrganizationalUnitResponseBodyOrganizationalUnit;
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
      organizationalUnit: 'OrganizationalUnit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnit: GetRootOrganizationalUnitResponseBodyOrganizationalUnit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.organizationalUnit && typeof (this.organizationalUnit as any).validate === 'function') {
      (this.organizationalUnit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

