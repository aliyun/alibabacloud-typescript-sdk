// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDbListResponseBodyDataAccounts } from "./DescribeDbListResponseBodyDataAccounts";


export class DescribeDbListResponseBodyData extends $dara.Model {
  accounts?: DescribeDbListResponseBodyDataAccounts[];
  /**
   * @example
   * utf8mb4
   */
  characterSetName?: string;
  /**
   * @example
   * test
   */
  DBDescription?: string;
  /**
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @example
   * test
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeDbListResponseBodyDataAccounts },
      characterSetName: 'string',
      DBDescription: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

