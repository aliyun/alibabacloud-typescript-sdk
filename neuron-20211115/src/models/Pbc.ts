// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Pbc extends $dara.Model {
  /**
   * @example
   * 基础商品
   */
  alias?: string;
  assetType?: string;
  /**
   * @example
   * 企业服务
   */
  company?: string;
  /**
   * @example
   * 12
   */
  companyId?: number;
  /**
   * @example
   * 基础商品PBC
   */
  description?: string;
  /**
   * @example
   * 1
   */
  developerId?: string;
  developerName?: string;
  /**
   * @example
   * 1
   */
  forkCount?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * common
   */
  industry?: string;
  invorkCount?: number;
  isWatched?: boolean;
  latestVersionId?: number;
  marketId?: number;
  /**
   * @example
   * product
   */
  name?: string;
  requestId?: string;
  /**
   * @example
   * foundation
   */
  type?: string;
  watchCount?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      assetType: 'assetType',
      company: 'company',
      companyId: 'companyId',
      description: 'description',
      developerId: 'developerId',
      developerName: 'developerName',
      forkCount: 'forkCount',
      id: 'id',
      industry: 'industry',
      invorkCount: 'invorkCount',
      isWatched: 'isWatched',
      latestVersionId: 'latestVersionId',
      marketId: 'marketId',
      name: 'name',
      requestId: 'requestId',
      type: 'type',
      watchCount: 'watchCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      assetType: 'string',
      company: 'string',
      companyId: 'number',
      description: 'string',
      developerId: 'string',
      developerName: 'string',
      forkCount: 'number',
      id: 'number',
      industry: 'string',
      invorkCount: 'number',
      isWatched: 'boolean',
      latestVersionId: 'number',
      marketId: 'number',
      name: 'string',
      requestId: 'string',
      type: 'string',
      watchCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

