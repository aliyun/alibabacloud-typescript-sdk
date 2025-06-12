// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigInXMLRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters whose settings you want to modify. You can call the [DescribeDBClusterConfigInXML](https://help.aliyun.com/document_detail/452210.html) operation to query configuration parameters, and modify the settings of the returned configuration parameters.
   * 
   * > You must specify all configuration parameters even when you want to modify the setting of a single parameter. If a configuration parameter is not specified, the original value of this parameter is retained or the modification fails.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0"?>
   * <yandex>
   *     <keep_alive_timeout>400</keep_alive_timeout>
   *     <listen_backlog>4096</listen_backlog>
   *     <logger>
   *         <level>debug</level>
   *         <size>1000M</size>
   *     </logger>
   *     <mark_cache_size>5368709120</mark_cache_size>
   *     <max_concurrent_queries>201</max_concurrent_queries>
   *     <max_connections>4096</max_connections>
   *     <max_partition_size_to_drop>0</max_partition_size_to_drop>
   *     <max_table_size_to_drop>0</max_table_size_to_drop>
   *     <merge_tree>
   *         <max_delay_to_insert>256</max_delay_to_insert>
   *         <max_part_loading_threads>auto</max_part_loading_threads>
   *         <max_suspicious_broken_parts>100</max_suspicious_broken_parts>
   *         <zookeeper_session_expiration_check_period>1</zookeeper_session_expiration_check_period>
   *     </merge_tree>
   *     <uncompressed_cache_size>1717986918</uncompressed_cache_size>
   * </yandex>
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all the clusters that are deployed in a specified region, including the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The reason for the modification.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The region ID of the cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      reason: 'Reason',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
      reason: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

