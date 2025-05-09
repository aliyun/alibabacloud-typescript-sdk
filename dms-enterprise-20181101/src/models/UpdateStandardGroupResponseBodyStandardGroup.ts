// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardGroupResponseBodyStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the database for which the security rules are used.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * @example
   * Production Environment test rules
   */
  description?: string;
  /**
   * @remarks
   * The security rule set ID.
   * 
   * @example
   * 41****
   */
  groupId?: number;
  /**
   * @remarks
   * The control mode. Valid values:
   * 
   * *   **NONE_CONTROL**: Flexible Management
   * *   **STABLE**: Stable Change
   * *   **COMMON**: Security Collaboration
   * 
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule set.
   * 
   * @example
   * poc_test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the user who last modified the security rules.
   * 
   * @example
   * 51****
   */
  lastMenderId?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      description: 'Description',
      groupId: 'GroupId',
      groupMode: 'GroupMode',
      groupName: 'GroupName',
      lastMenderId: 'LastMenderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      description: 'string',
      groupId: 'number',
      groupMode: 'string',
      groupName: 'string',
      lastMenderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

