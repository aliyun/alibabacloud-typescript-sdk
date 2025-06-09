// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";


export class CreateLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record the **public IP address** and the **log receiving time**. Default value: false. Valid values:
   * 
   * *   true: records the public IP address and the log receiving time. If you set this parameter to true, Simple Log Service automatically adds the public IP address of the device from which the log is collected and the time when Simple Log Service receives the log to the Tag field of the collected log.
   * *   false: does not record the public IP address or log receiving time.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the web tracking feature. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The data structure of the encryption configuration. The following parameters are included: `enable`, `encrypt_type`, and `user_cmk_info`. For more information, see [EncryptConf](https://help.aliyun.com/document_detail/409461.html).
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The data retention period for the hot storage tier. Unit: days. Minimum value: 7. The value of this parameter cannot exceed the value of ttl. If you set this parameter to -1, all data is stored in the hot storage tier.
   * 
   * After the retention period that is specified for the hot storage tier elapses, the data is moved to the Infrequent Access (IA) storage tier. For more information, see [Enable hot and cold-tiered storage for a Logstore](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The data retention period for the IA storage tier. You must set this parameter to at least 30 days. After the data retention period that you specify for the IA storage tier elapses, the data is moved to the Archive storage tier.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore. The name must meet the following requirements:
   * 
   * *   The name must be unique in a project.
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 256.
   * 
   * >  If you set autoSplit to true, you must specify this parameter.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance query operations. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the data retention period is long, or log analysis is not required. Data retention periods of weeks or months are considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * IngestProcessor ID
   */
  processorId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * >  You cannot call the CreateLogStore operation to change the number of shards. You can call the SplitShard or MergeShards operation to change the number of shards.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The type of the observable data. Valid values:
   * 
   * *   **None** (default): log data
   * *   **Metrics**: metric data
   * 
   * @example
   * None
   */
  telemetryType?: string;
  /**
   * @remarks
   * The data retention period. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, data is permanently stored.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      processorId: 'processorId',
      shardCount: 'shardCount',
      telemetryType: 'telemetryType',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      processorId: 'string',
      shardCount: 'number',
      telemetryType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.encryptConf && typeof (this.encryptConf as any).validate === 'function') {
      (this.encryptConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

