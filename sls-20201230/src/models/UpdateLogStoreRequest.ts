// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";


export class UpdateLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record public IP addresses. Default value: false. Valid values:
   * 
   * *   true
   * *   false
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
   * The data structure of the encryption configuration.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot storage tier of the Logstore. Valid values: 7 to 3000. Unit: days. After the retention period that is specified for the hot storage tier elapses, the data is moved to the Infrequent Access (IA) storage tier. For more information, see [Enable hot and cold-tiered storage for a Logstore](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The retention period of data in the IA storage tier of the Logstore. You must set this parameter to at least 30 days. After the data retention period that you specify for the IA storage tier elapses, the data is moved to the Archive storage tier.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 256.
   * 
   * >  If you set autoSplit to true, you must specify maxSplitShard.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * >  You cannot call the UpdateLogStore operation to change the number of shards. You can call the SplitShard or MergeShards operation to change the number of shards.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  shardCount?: number;
  /**
   * @remarks
   * The type of the observable data. Valid values:
   * 
   * *   None (default): log data.
   * *   Metrics: metric data.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  telemetryType?: string;
  /**
   * @remarks
   * The retention period of data. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, logs are permanently stored.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
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

