// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteDeliveryTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   dcdn_log_access_l1 (default): access logs.
   * *   dcdn_log_er: Edge Routine logs.
   * *   dcdn_log_waf: firewall logs.
   * *   dcdn_log_ipa: TCP/UDP proxy logs.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * *   cn: the Chinese mainland.
   * *   sg: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The destination of the delivery. Valid values:
   * 
   * 1.  sls: Alibaba Cloud Simple Log Service (SLS).
   * 2.  http: HTTP server.
   * 3.  aws3: Amazon Simple Storage Service (S3).
   * 4.  oss: Alibaba Cloud Object Storage Service (OSS).
   * 5.  kafka: Kafka.
   * 6.  aws3cmpt: S3-compatible storage service.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The status of the delivery task.
   * 
   * *   **online**
   * *   **offline**
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * @example
   * cdn-test-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

