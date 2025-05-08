// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   **dcdn_log_access_l1** (default): access logs.
   * *   **dcdn_log_er**: Edge Routine logs.
   * *   **dcdn_log_waf**: firewall logs.
   * *   **dcdn_log_ipa**: TCP/UDP proxy logs.
   * 
   * @example
   * dcdn_log_er
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
   * *   sls: Alibaba Cloud Simple Log Service (SLS).
   * *   http: HTTP server.
   * *   aws3: Amazon Simple Storage Service (S3).
   * *   oss: Alibaba Cloud Object Storage Service (OSS).
   * *   kafka: Kafka.
   * *   aws3cmpt: S3-compatible storage service.
   * 
   * @example
   * oss
   */
  deliveryType?: string;
  details?: string;
  /**
   * @remarks
   * The discard rate.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The fields.
   * 
   * @example
   * ClientRequestID,ClientRequestHost
   */
  fieldList?: string;
  /**
   * @remarks
   * The filtering rules.
   * 
   * @example
   * [{"ClientSSLProtocol": {"equals": ["TLSv1.3"]}}]
   */
  filterRules?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7072132a-bd3c-46a6-9e81-aba3e0e3f861
   */
  requestId?: string;
  /**
   * @remarks
   * The delivery configuration.
   * 
   * @example
   * {\\"Project\\": \\"er-online-hjy-pro\\", \\"Logstore\\": \\"er-online-hjy-log\\", \\"Region\\": \\"cn-hangzhou\\", \\"Endpoint\\": \\"cn-hangzhou.log.aliyuncs.com\\", \\"Aliuid\\": \\"1077912128805410\\"}
   */
  sinkConfig?: any;
  /**
   * @remarks
   * The status of the delivery task.
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
   * testoss11
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldList: 'FieldList',
      filterRules: 'FilterRules',
      requestId: 'RequestId',
      sinkConfig: 'SinkConfig',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldList: 'string',
      filterRules: 'string',
      requestId: 'string',
      sinkConfig: 'any',
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

