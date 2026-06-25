// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the built-in service registry of SAE.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * The default value is true. If you do not use the built-in service registry, set this parameter to false to speed up namespace creation.
   * 
   * @example
   * true
   */
  enableMicroRegistration?: boolean;
  /**
   * @remarks
   * The short-format namespace ID. You do not need to specify a region ID. This parameter is recommended. The ID cannot exceed 20 characters in length and can contain only lowercase letters and digits.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The description of the namespace. The description cannot exceed 100 characters in length.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The long-format namespace ID. If you specify this parameter, NameSpaceShortId is ignored. This parameter is retained for compatibility. Use the short-format namespace ID instead. The format is `<RegionId>:<NamespaceId>`. The `NamespaceId` can contain only lowercase letters and digits and cannot exceed 32 characters in length. Example: `cn-beijing:test`. For information about the regions that SAE supports, see [DescribeRegions](https://help.aliyun.com/document_detail/126213.html).
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace. The name cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

