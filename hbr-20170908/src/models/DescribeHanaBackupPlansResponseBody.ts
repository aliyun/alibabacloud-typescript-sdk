// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaBackupPlansResponseBodyHanaBackupPlansHanaBackupPlan extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * COMPLETE_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   COMPLETE: full backup
   * *   INCREMENTAL: incremental backup
   * *   DIFFERENTIAL: differential backup
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  businessStatus?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0002scknka*****
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether the backup plan is disabled. Valid values:
   * 
   * *   true: The backup plan is disabled.
   * *   false: The backup plan is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * pl-0000tnyndg3ne5m4ubeu
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * plan-20220118-141153
   */
  planName?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000csihw82pqkd7hcjws
   */
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
  /**
   * @remarks
   * The details of the backup plan.
   */
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

