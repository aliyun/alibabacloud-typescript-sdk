// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric repository.
   * 
   * @example
   * Alibaba Cloud product metric repository.
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric repository.
   * 
   * Format: consists of lowercase letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The region in which monitoring data is stored.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceRegion?: string;
  /**
   * @remarks
   * The storage solution for monitoring data. Valid values:
   * 
   * - aliyun_prometheus: monitoring data is stored in Managed Service for Prometheus.
   * 
   * > For more information about storage solutions for monitoring data, see [Storage solutions for Hybrid Cloud Monitoring data](https://help.aliyun.com/document_detail/2594921.html).
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
   * - cms.s1.large: storage duration of 15 days.
   * - cms.s1.xlarge: storage duration of 32 days.
   * - cms.s1.2xlarge: storage duration of 63 days.
   * - cms.s1.3xlarge (default): storage duration of 93 days.
   * - cms.s1.6xlarge: storage duration of 185 days.
   * - cms.s1.12xlarge: storage duration of 376 days.
   * 
   * For the pricing of different storage duration specifications, see the **Pricing** section in [monitoring dashboard](https://help.aliyun.com/document_detail/223532.html).
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

