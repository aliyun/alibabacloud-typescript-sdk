// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): access logs.
   * - **dcdn_log_er**: Edge Routine function logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * - **cn**: the Chinese mainland.
   * - **sg**: global (excluding the Chinese mainland).
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * - **sls**: Alibaba Cloud Simple Log Service.
   * - **http**: HTTP service.
   * - **aws3**: Amazon S3 service.
   * - **oss**: Alibaba Cloud Object Storage Service.
   * - **kafka**: Kafka service.
   * - **aws3cmpt**: Amazon S3-compatible service.
   * 
   * @example
   * oss
   */
  deliveryType?: string;
  /**
   * @remarks
   * The list of Edge Routine PODs.
   * 
   * @example
   * xxx,xxx
   */
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
   * The field array.
   * 
   * @example
   * ClientRequestID,ClientRequestHost
   */
  fieldList?: string;
  /**
   * @remarks
   * The filter rules.
   * 
   * @example
   * [{"ClientSSLProtocol": {"equals": ["TLSv1.3"]}}]
   */
  filterRules?: string;
  /**
   * @remarks
   * The version of the filter rules.
   * 
   * > For backward compatibility with legacy filter rules, the default value is v1. Newly created rules use v2.
   * 
   * @example
   * v2
   */
  filterVer?: string;
  /**
   * @remarks
   * The filter rules for the delivery task.
   * 
   * > New version of delivery filter rules.
   * 
   * @example
   * {
   *   "where": {
   *     "or": [
   *       {
   *         "and": [
   *           { "key": "site", "operator": "eq", "value": "example.com" },
   *           { "key": "status_code", "operator": "in", "value": ["200", "304"] }
   *         ]
   *       }
   *     ]
   *   }
   * }
   */
  rawRule?: string;
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
   * The task status.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The task name.
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
      filterVer: 'FilterVer',
      rawRule: 'RawRule',
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
      filterVer: 'string',
      rawRule: 'string',
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

