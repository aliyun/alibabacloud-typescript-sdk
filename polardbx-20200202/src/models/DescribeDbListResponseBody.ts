// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbListResponseBodyDataAccounts extends $dara.Model {
  /**
   * @example
   * root4test
   */
  accountName?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDbListResponseBody extends $dara.Model {
  data?: DescribeDbListResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDbListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

