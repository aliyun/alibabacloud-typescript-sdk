// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric store.
   * 
   * @example
   * Alibaba Cloud product metric repository.
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric store.
   * 
   * Format: consists of uppercase letters, lowercase letters, digits, and hyphens (-).
   * 
   * For information about how to obtain the name of a metric store, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  regionId?: string;
  /**
   * @remarks
   * The data storage duration. Valid values:
   * 
   * - cms.s1.large: 15 days.
   * - cms.s1.xlarge: 32 days.
   * - cms.s1.2xlarge: 63 days.
   * - cms.s1.3xlarge: 93 days.
   * - cms.s1.6xlarge: 185 days.
   * - cms.s1.12xlarge: 376 days.
   * 
   * For the prices of different storage duration specifications, see the **Pricing** section in [Dashboard](https://help.aliyun.com/document_detail/223532.html).
   * 
   * @example
   * cms.s1.2xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
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

