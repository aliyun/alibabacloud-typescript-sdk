// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePGHbaConfigResponseBodyDefaultHbaItems } from "./DescribePghbaConfigResponseBodyDefaultHbaItems";
import { DescribePGHbaConfigResponseBodyRunningHbaItems } from "./DescribePghbaConfigResponseBodyRunningHbaItems";


export class DescribePGHbaConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The default configuration items of the pg_hba.conf file.
   */
  defaultHbaItems?: DescribePGHbaConfigResponseBodyDefaultHbaItems;
  /**
   * @remarks
   * The time when the previous modification was made to the pg_hba.conf file.
   * 
   * @example
   * 2021-11-25T06:00:40Z
   */
  hbaModifyTime?: string;
  /**
   * @remarks
   * The status of the previous modification to the pg_hba.conf file. Valid values:
   * 
   * *   **success**
   * *   **setting**
   * *   **failed**
   * 
   * @example
   * success
   */
  lastModifyStatus?: string;
  /**
   * @remarks
   * The reason why the previous modification was made to the pg_hba.conf file.
   * 
   * @example
   * The specified users (testuser) is not exist.
   */
  modifyStatusReason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A147A124-A147-5CCF-9609-B73C028848DF
   */
  requestId?: string;
  /**
   * @remarks
   * The current configuration items of the pg_hba.conf file.
   */
  runningHbaItems?: DescribePGHbaConfigResponseBodyRunningHbaItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      defaultHbaItems: 'DefaultHbaItems',
      hbaModifyTime: 'HbaModifyTime',
      lastModifyStatus: 'LastModifyStatus',
      modifyStatusReason: 'ModifyStatusReason',
      requestId: 'RequestId',
      runningHbaItems: 'RunningHbaItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      defaultHbaItems: DescribePGHbaConfigResponseBodyDefaultHbaItems,
      hbaModifyTime: 'string',
      lastModifyStatus: 'string',
      modifyStatusReason: 'string',
      requestId: 'string',
      runningHbaItems: DescribePGHbaConfigResponseBodyRunningHbaItems,
    };
  }

  validate() {
    if(this.defaultHbaItems && typeof (this.defaultHbaItems as any).validate === 'function') {
      (this.defaultHbaItems as any).validate();
    }
    if(this.runningHbaItems && typeof (this.runningHbaItems as any).validate === 'function') {
      (this.runningHbaItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

