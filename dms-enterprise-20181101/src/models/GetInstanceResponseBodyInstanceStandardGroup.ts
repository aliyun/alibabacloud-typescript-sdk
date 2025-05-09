// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstanceStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the control mode. Valid values:
   * 
   * *   **COMMON**: Security Collaboration
   * *   **NONE_CONTROL**: Flexible Management
   * *   **STABLE**: Stable Change
   * 
   * @example
   * NONE_CONTROL
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule set corresponding to the control mode.
   * 
   * @example
   * test group name
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupMode: 'GroupMode',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMode: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

