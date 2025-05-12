// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChainResponseBodyChains extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * The time when the delivery chain was created.
   * 
   * @example
   * 1638255427000
   */
  createTime?: number;
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
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the delivery chain was last modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Repositories to which the delivery chain does not apply.
   */
  scopeExclude?: string[];
  /**
   * @remarks
   * The ID of the delivery chain scope.
   * 
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @remarks
   * The type of the delivery chain scope.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      scopeExclude: 'ScopeExclude',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      name: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
      scopeId: 'string',
      scopeType: 'string',
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

