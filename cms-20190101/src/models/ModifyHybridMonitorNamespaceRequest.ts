// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * The name can contain letters, digits, and hyphens (-).
   * 
   * For information about how to obtain the name of a namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
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
   * The data retention period. Valid values:
   * 
   * *   cms.s1.large: Data is stored for 15 days.
   * *   cms.s1.xlarge: Data is stored for 32 days.
   * *   cms.s1.2xlarge: Data is stored for 63 days.
   * *   cms.s1.3xlarge: Data is stored for 93 days.
   * *   cms.s1.6xlarge: Data is stored for 185 days.
   * *   cms.s1.12xlarge: Data is stored for 376 days.
   * 
   * For information about the pricing for different retention periods, see the **Pricing** section in [Billing of the dashboard feature](https://help.aliyun.com/document_detail/223532.html).
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

