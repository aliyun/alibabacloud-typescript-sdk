// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * The name can contain lowercase letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The region where the metric data is stored.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceRegion?: string;
  /**
   * @remarks
   * The storage scheme of metric data. Valid values:
   * 
   * *   m_prom_user: The metric data is stored in Simple Log Service.
   * *   m_prom_pool: The metric data is stored in the private storage space provided by CloudMonitor.
   * 
   * >  For more information about the storage schemes of metric data, see [Data storage schemes for Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/2594921.html).
   * 
   * @example
   * m_prometheus
   */
  namespaceType?: string;
  regionId?: string;
  /**
   * @remarks
   * The data retention period. Valid values:
   * 
   * *   cms.s1.large (Retention Period 15 Days)
   * *   cms.s1.xlarge (Retention Period 32 Days)
   * *   cms.s1.2xlarge (Retention Period 63 Days)
   * *   cms.s1.3xlarge (Retention Period 93 Days) (default)
   * *   cms.s1.6xlarge (Retention Period 185 Days)
   * *   cms.s1.12xlarge (Retention Period 367 Days)
   * 
   * For information about the pricing for different retention periods, see the **Pricing** section in [Billing of the dashboard feature](https://help.aliyun.com/document_detail/223532.html).
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

