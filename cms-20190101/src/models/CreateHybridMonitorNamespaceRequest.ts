// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric namespace.
   * 
   * @example
   * Alibaba Cloud product metric repository.
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric namespace.
   * 
   * Format: The name can contain only lowercase letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The region where the monitoring data is stored.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceRegion?: string;
  /**
   * @remarks
   * The storage solution for monitoring data. Valid values:
   * 
   * - aliyun_prometheus: Stores monitoring data in Prometheus.
   * 
   * > For more information about storage solutions for monitoring data, see [Storage solutions for monitoring data in Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/2594921.html).
   * 
   * @example
   * aliyun_prometheus
   */
  namespaceType?: string;
  regionId?: string;
  /**
   * @remarks
   * The data storage duration. Valid values:
   * 
   * - cms.s1.large: Stores data for 15 days.
   * - cms.s1.xlarge: Stores data for 32 days.
   * - cms.s1.2xlarge: Stores data for 63 days.
   * - cms.s1.3xlarge (default): Stores data for 93 days.
   * - cms.s1.6xlarge: Stores data for 185 days.
   * - cms.s1.12xlarge: Stores data for 376 days.
   * 
   * For more information about the pricing of different storage durations, see the **Pricing** table in [Dashboard](https://help.aliyun.com/document_detail/223532.html).
   * 
   * @example
   * cms.s1.3xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      namespaceRegion: 'NamespaceRegion',
      namespaceType: 'NamespaceType',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      namespaceRegion: 'string',
      namespaceType: 'string',
      regionId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

