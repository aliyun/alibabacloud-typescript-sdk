// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceUpdateCmd extends $dara.Model {
  /**
   * @example
   * 员工管理
   */
  alias?: string;
  /**
   * @example
   * dev
   */
  codeBranch?: string;
  /**
   * @example
   * 员工管理
   */
  description?: string;
  /**
   * @example
   * SDK
   */
  extraInfo?: string;
  /**
   * @example
   * git@gitlab.alibaba-inc.com:neuron/manager-developer.git
   */
  gitRepo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * https://aone.alibaba-inc.com/appcenter/app/onlinetask/SUBMIT_RESOURCE_APPLY?appId=195041
   */
  jumpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      codeBranch: 'codeBranch',
      description: 'description',
      extraInfo: 'extraInfo',
      gitRepo: 'gitRepo',
      id: 'id',
      jumpUrl: 'jumpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      codeBranch: 'string',
      description: 'string',
      extraInfo: 'string',
      gitRepo: 'string',
      id: 'number',
      jumpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

