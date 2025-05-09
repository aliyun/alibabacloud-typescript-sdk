// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardGroupResponseBodyStandardGroup extends $dara.Model {
  /**
   * @example
   * mysql
   */
  dbType?: string;
  description?: string;
  /**
   * @example
   * 41****
   */
  groupId?: number;
  /**
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @example
   * poc_test
   */
  groupName?: string;
  /**
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

