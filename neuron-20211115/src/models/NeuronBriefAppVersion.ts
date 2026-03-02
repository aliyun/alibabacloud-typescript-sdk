// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronBriefAppVersion extends $dara.Model {
  /**
   * @example
   * 1343424
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appId?: number;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  manageType?: string;
  /**
   * @example
   * commit_pckesd7d_20230227215101
   */
  mobiCommitId?: string;
  /**
   * @example
   * 1
   */
  mobiId?: number;
  /**
   * @example
   * module_tvtpydeq
   */
  mobiModuleId?: string;
  /**
   * @example
   * sda
   */
  mobiUrl?: string;
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      appId: 'appId',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      manageType: 'manageType',
      mobiCommitId: 'mobiCommitId',
      mobiId: 'mobiId',
      mobiModuleId: 'mobiModuleId',
      mobiUrl: 'mobiUrl',
      productId: 'productId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appId: 'number',
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      manageType: 'string',
      mobiCommitId: 'string',
      mobiId: 'number',
      mobiModuleId: 'string',
      mobiUrl: 'string',
      productId: 'number',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

