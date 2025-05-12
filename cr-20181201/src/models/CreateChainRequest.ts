// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChainRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the delivery chain in the JSON format.
   * 
   * @example
   * chainconfig
   */
  chainConfig?: string;
  /**
   * @remarks
   * The description of the delivery chain.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * Repositories in which the delivery chain does not take effect.
   */
  scopeExclude?: string[];
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      scopeExclude: 'ScopeExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

