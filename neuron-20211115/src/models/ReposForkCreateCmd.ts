// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReposForkCreateCmd extends $dara.Model {
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * global-mall
   */
  gitGroup?: string;
  marketId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 商城国际化版本
   */
  usage?: string;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      gitGroup: 'gitGroup',
      marketId: 'marketId',
      pbcId: 'pbcId',
      usage: 'usage',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      gitGroup: 'string',
      marketId: 'number',
      pbcId: 'number',
      usage: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

