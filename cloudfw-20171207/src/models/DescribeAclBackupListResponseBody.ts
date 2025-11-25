// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclBackupListResponseBodyBackups extends $dara.Model {
  /**
   * @example
   * 10
   */
  aclCount?: number;
  /**
   * @example
   * 1743683400
   */
  backUpTime?: number;
  /**
   * @example
   * description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      aclCount: 'AclCount',
      backUpTime: 'BackUpTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCount: 'number',
      backUpTime: 'number',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclBackupListResponseBody extends $dara.Model {
  backups?: DescribeAclBackupListResponseBodyBackups[];
  /**
   * @example
   * 6C9105F2-9F31-5A62-8D52-FA65A3E5****
   */
  requestId?: string;
  /**
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: { 'type': 'array', 'itemType': DescribeAclBackupListResponseBodyBackups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backups)) {
      $dara.Model.validateArray(this.backups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

