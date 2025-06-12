// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivilegesOfUserResponseBodyData extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * Workbench:Call
   */
  name?: string;
  /**
   * @example
   * SELF_ONLY
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

