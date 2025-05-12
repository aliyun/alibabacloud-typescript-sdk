// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChainResponseBodyChainConfig } from "./GetChainResponseBodyChainConfig";


export class GetChainResponseBody extends $dara.Model {
  chainConfig?: GetChainResponseBodyChainConfig;
  /**
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1638255427000
   */
  createTime?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
  scopeExclude?: string[];
  /**
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      scopeExclude: 'ScopeExclude',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: GetChainResponseBodyChainConfig,
      chainId: 'string',
      code: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      name: 'string',
      requestId: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.chainConfig && typeof (this.chainConfig as any).validate === 'function') {
      (this.chainConfig as any).validate();
    }
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

