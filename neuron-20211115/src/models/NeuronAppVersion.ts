// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppInfoContent } from "./NeuronAppInfoContent";


export class NeuronAppVersion extends $dara.Model {
  /**
   * @example
   * 1343424
   */
  accountId?: string;
  appEntry?: string;
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
   * 升级订单功能
   */
  description?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  envs?: string[];
  featureDesc?: NeuronAppInfoContent[];
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  imageUrls?: string[];
  instructionUrl?: string;
  /**
   * @example
   * 1
   */
  isLatest?: number;
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
  pbcs?: number[];
  privateInfo?: string[];
  /**
   * @example
   * 1
   */
  productId?: number;
  scopes?: string[];
  /**
   * @example
   * {}
   */
  sidebar?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @example
   * sda
   */
  unbindEffect?: string;
  unbindReasons?: string[];
  updatedFeature?: NeuronAppInfoContent[];
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
      appEntry: 'appEntry',
      appId: 'appId',
      description: 'description',
      enterpriseId: 'enterpriseId',
      envs: 'envs',
      featureDesc: 'featureDesc',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      imageUrls: 'imageUrls',
      instructionUrl: 'instructionUrl',
      isLatest: 'isLatest',
      manageType: 'manageType',
      mobiCommitId: 'mobiCommitId',
      mobiId: 'mobiId',
      mobiModuleId: 'mobiModuleId',
      mobiUrl: 'mobiUrl',
      pbcs: 'pbcs',
      privateInfo: 'privateInfo',
      productId: 'productId',
      scopes: 'scopes',
      sidebar: 'sidebar',
      status: 'status',
      unbindEffect: 'unbindEffect',
      unbindReasons: 'unbindReasons',
      updatedFeature: 'updatedFeature',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appEntry: 'string',
      appId: 'number',
      description: 'string',
      enterpriseId: 'number',
      envs: { 'type': 'array', 'itemType': 'string' },
      featureDesc: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      instructionUrl: 'string',
      isLatest: 'number',
      manageType: 'string',
      mobiCommitId: 'string',
      mobiId: 'number',
      mobiModuleId: 'string',
      mobiUrl: 'string',
      pbcs: { 'type': 'array', 'itemType': 'number' },
      privateInfo: { 'type': 'array', 'itemType': 'string' },
      productId: 'number',
      scopes: { 'type': 'array', 'itemType': 'string' },
      sidebar: 'string',
      status: 'string',
      unbindEffect: 'string',
      unbindReasons: { 'type': 'array', 'itemType': 'string' },
      updatedFeature: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    if(Array.isArray(this.featureDesc)) {
      $dara.Model.validateArray(this.featureDesc);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.pbcs)) {
      $dara.Model.validateArray(this.pbcs);
    }
    if(Array.isArray(this.privateInfo)) {
      $dara.Model.validateArray(this.privateInfo);
    }
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    if(Array.isArray(this.unbindReasons)) {
      $dara.Model.validateArray(this.unbindReasons);
    }
    if(Array.isArray(this.updatedFeature)) {
      $dara.Model.validateArray(this.updatedFeature);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

