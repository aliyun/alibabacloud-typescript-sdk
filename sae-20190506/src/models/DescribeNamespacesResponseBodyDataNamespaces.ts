// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespacesResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The ACM-specific AccessKey ID. It can be used to manage data in an Application Configuration Management (ACM) namespace. For more information, see [Differences between Alibaba Cloud AccessKey and ACM-specific AccessKey](https://help.aliyun.com/document_detail/68941.html).
   * 
   * @example
   * b34dbe3315c64f9f99b58ea447ec****
   */
  accessKey?: string;
  /**
   * @remarks
   * The endpoint of the host.
   * 
   * @example
   * addr-bj-internal.edas.aliyun.com
   */
  addressServerHost?: string;
  /**
   * @remarks
   * The short ID of the namespace.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The ID of the namespace. You cannot query, modify, or delete the default namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * name
   */
  namespaceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ACM-specific AccessKey secret. It can be used to manage data in an ACM namespace. For more information, see [Differences between Alibaba Cloud AccessKey and ACM-specific AccessKey](https://help.aliyun.com/document_detail/68941.html).
   * 
   * @example
   * G/w6sseK7+nb3S6HBmANDBMD****
   */
  secretKey?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 838cad95-973f-48fe-830b-2a8546d7****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      addressServerHost: 'AddressServerHost',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      addressServerHost: 'string',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      secretKey: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

