// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the built-in registry of SAE. Valid values:
   * - **true**
   * - **false**
   * 
   * If you set this parameter to true, a shared registry and related information are created for the namespace. After the shared registry is created, it cannot be disabled.
   * 
   * @example
   * true
   */
  enableMicroRegistration?: boolean;
  /**
   * @remarks
   * The short namespace ID. You do not need to include the region ID. The value can contain only lowercase letters and digits and cannot exceed 20 characters in length. We recommend that you use this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The namespace description. The value cannot exceed 100 characters in length.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The long namespace ID. If you specify this parameter, it takes effect and NameSpaceShortId is ignored. This parameter is retained for backward compatibility. We recommend that you use the short namespace ID. The format is `<RegionId>:<NamespaceId>`. `NamespaceId` can contain only lowercase letters and digits, such as `cn-beijing:test`. The value cannot exceed 32 characters in length. For more information about the **RegionId** values supported by SAE, see [DescribeRegions](https://help.aliyun.com/document_detail/2834842.html).
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name. The value cannot exceed 64 characters in length.
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

