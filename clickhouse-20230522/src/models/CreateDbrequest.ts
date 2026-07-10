// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database.
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
   * The name of the database. The name must meet the following requirements:
   * 
   * - Consist of lowercase letters, digits, underscores (_), and hyphens (-).
   * 
   * - Start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - Be up to 64 characters in length.
   * 
   * >Notice: 
   * 
   * An underscore (_) is counted as two characters.
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

