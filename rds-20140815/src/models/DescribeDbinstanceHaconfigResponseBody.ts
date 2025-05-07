// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos } from "./DescribeDbinstanceHaconfigResponseBodyHostInstanceInfos";


export class DescribeDBInstanceHAConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The high availability mode of the instance. Valid values:
   * 
   * *   **RPO**: Data consistency is preferred. The instance ensures data reliability to minimize data losses. If you have high requirements on data consistency, select this mode.
   * *   **RTO**: Service availability is preferred. The instance restores the database service at the earliest opportunity to ensure service availability. If you have high requirements on instance availability, select this mode.
   * 
   * > This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * RPO
   */
  HAMode?: string;
  /**
   * @remarks
   * An array that consists of the information of the primary and secondary instances.
   */
  hostInstanceInfos?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The data replication mode of the instance. Valid values:
   * 
   * *   **Sync**: the synchronous mode
   * *   **Semi-sync**: the semi-synchronous replication mode
   * *   **Async**: the asynchronous mode
   * 
   * > This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * Sync
   */
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      HAMode: 'HAMode',
      hostInstanceInfos: 'HostInstanceInfos',
      requestId: 'RequestId',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      HAMode: 'string',
      hostInstanceInfos: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos,
      requestId: 'string',
      syncMode: 'string',
    };
  }

  validate() {
    if(this.hostInstanceInfos && typeof (this.hostInstanceInfos as any).validate === 'function') {
      (this.hostInstanceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

