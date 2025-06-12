// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAdminsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 8021****
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 26972543893791****
   */
  ramId?: string;
  /**
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      instanceId: 'InstanceId',
      ramId: 'RamId',
      roleId: 'RoleId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      instanceId: 'string',
      ramId: 'string',
      roleId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

