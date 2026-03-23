// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaskingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance Name
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******5
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Database Name
   * 
   * @example
   * myDB
   */
  DBName?: string;
  ownerId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Rule Name (comma-separated)
   * 
   * @example
   * test1,test2
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

