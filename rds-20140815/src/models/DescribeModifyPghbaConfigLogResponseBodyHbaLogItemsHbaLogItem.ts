// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems } from "./DescribeModifyPghbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems";
import { DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems } from "./DescribeModifyPghbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems";


export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem extends $dara.Model {
  /**
   * @remarks
   * The configurations of the pg_hba.conf file after modification.
   */
  afterHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems;
  /**
   * @remarks
   * The configurations of the pg_hba.conf file before modification.
   */
  beforeHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems;
  /**
   * @remarks
   * The status of the modification.
   * 
   * *   **success**: The modification is successful.
   * *   **failed**: The modification failed.
   * *   **setting**: The modification is being applied.
   * 
   * @example
   * success
   */
  modifyStatus?: string;
  /**
   * @remarks
   * The time when the pg_hba.conf file was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-25T06:00:40Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The reason why the modification failed.
   * 
   * @example
   * null
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      afterHbaItems: 'AfterHbaItems',
      beforeHbaItems: 'BeforeHbaItems',
      modifyStatus: 'ModifyStatus',
      modifyTime: 'ModifyTime',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems,
      beforeHbaItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems,
      modifyStatus: 'string',
      modifyTime: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(this.afterHbaItems && typeof (this.afterHbaItems as any).validate === 'function') {
      (this.afterHbaItems as any).validate();
    }
    if(this.beforeHbaItems && typeof (this.beforeHbaItems as any).validate === 'function') {
      (this.beforeHbaItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

