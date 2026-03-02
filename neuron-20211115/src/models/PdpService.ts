// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpService extends $dara.Model {
  /**
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * 1
   */
  enterpriseId?: number;
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
   * @example
   * 2022-2-22 11:11:2
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-2-22 11:11:2
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * https://cd.aone.alibaba-inc.com/ec/pipelines/44156?spm=a2o8d.aone_cd_assets_pages_pipeline_index.0.0.68b81c05WLmX79&name=%E3%80%90%E6%B5%8B%E8%AF%95%E3%80%91neuron-developer%E6%9D%AD%E5%B7%9E
   */
  jumpUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * employee
   */
  name?: string;
  /**
   * @example
   * INNER
   */
  orgType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcId?: number;
  requestId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SDK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alias: 'alias',
      codeBranch: 'codeBranch',
      description: 'description',
      enterpriseId: 'enterpriseId',
      extraInfo: 'extraInfo',
      gitRepo: 'gitRepo',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      jumpUrl: 'jumpUrl',
      name: 'name',
      orgType: 'orgType',
      pbcId: 'pbcId',
      requestId: 'requestId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alias: 'string',
      codeBranch: 'string',
      description: 'string',
      enterpriseId: 'number',
      extraInfo: 'string',
      gitRepo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      jumpUrl: 'string',
      name: 'string',
      orgType: 'string',
      pbcId: 'number',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

