// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan extends $dara.Model {
  backupPrefix?: string;
  backupType?: string;
  businessStatus?: string;
  clusterId?: string;
  databaseName?: string;
  disabled?: boolean;
  planId?: string;
  planName?: string;
  schedule?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      businessStatus: 'BusinessStatus',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      planId: 'PlanId',
      planName: 'PlanName',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      businessStatus: 'string',
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      planId: 'string',
      planName: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBodyHanaBackupPlans extends $dara.Model {
  hanaBackupPlan?: DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan[];
  static names(): { [key: string]: string } {
    return {
      hanaBackupPlan: 'HanaBackupPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hanaBackupPlan: { 'type': 'array', 'itemType': DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan },
    };
  }

  validate() {
    if(Array.isArray(this.hanaBackupPlan)) {
      $dara.Model.validateArray(this.hanaBackupPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHanaBackupPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  hanaBackupPlans?: DescribeHanaBackupPlansResponseBodyHanaBackupPlans;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F029C1C7-26B6-5ADD-A73E-D85CCD7C73A9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hanaBackupPlans: 'HanaBackupPlans',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hanaBackupPlans: DescribeHanaBackupPlansResponseBodyHanaBackupPlans,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.hanaBackupPlans && typeof (this.hanaBackupPlans as any).validate === 'function') {
      (this.hanaBackupPlans as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

