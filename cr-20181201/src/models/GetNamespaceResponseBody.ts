// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a repository is automatically created when an image is pushed to the namespace.
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
   * The default type of repositories. Valid values:
   * 
   * *   PUBLIC: The repositories are public repositories.
   * *   PRIVATE: The repositories are private repositories.
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
   * crn-tiw8t3f8i5lt****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace.
   * 
   * *   NORMAL
   * *   DELETING
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4BC9E21-8AA5-4582-83C1-C1209AB8196F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the namespace belongs.
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

