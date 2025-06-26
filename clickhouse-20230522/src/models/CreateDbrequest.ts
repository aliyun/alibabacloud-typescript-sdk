// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBRequest extends $dara.Model {
  /**
   * @remarks
   * Database remark information.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name. The name must meet the following requirements:
   * 
   * *   The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a lowercase letter and end with a lowercase letter or digit.
   * *   The name can be up to 64 characters in length.
   * 
   * >  An underscore (_) is counted as two characters.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb001
   */
  DBName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

