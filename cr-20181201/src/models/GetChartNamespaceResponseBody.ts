// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a repository was automatically created in the namespace. Valid values:
   * 
   * *   `true`: A repository was automatically created in the namespace.
   * *   `false`: No repository was automatically created in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository.
   * *   `PRIVATE`: a private repository.
   * 
   * @example
   * PRIVATE
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * crcn-43dhbjbyt2xl****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`: The namespace is normal.
   * *   `DELETING`: The namespace is being deleted.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD71CF13-93AA-4805-848B-69B2DD543A9A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      code: 'Code',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      code: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

