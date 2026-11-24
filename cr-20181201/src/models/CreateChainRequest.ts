// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChainRequest extends $dara.Model {
  /**
   * @remarks
   * The entity object of the JSON-formatted delivery chain description.
   * 
   * @example
   * chainconfig
   */
  chainConfig?: string;
  /**
   * @remarks
   * The delivery chain description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The delivery chain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The set of repositories excluded from execution by the delivery chain.
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

