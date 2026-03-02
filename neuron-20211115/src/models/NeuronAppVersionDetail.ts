// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppInfoContent } from "./NeuronAppInfoContent";
import { AppPluginInfo } from "./AppPluginInfo";


export class NeuronAppVersionDetail extends $dara.Model {
  /**
   * @example
   * 升级订单功能
   */
  appDesc?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  envs?: string[];
  featureDesc?: NeuronAppInfoContent[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://wwww.ali.com
   */
  iconUrl?: string;
  imageUrls?: string[];
  instructionUrl?: string;
  manageType?: string;
  /**
   * @example
   * 1
   */
  mobiId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多端商城
   */
  owner?: string;
  pbcs?: number[];
  pluginList?: AppPluginInfo[];
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
  /**
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      appDesc: 'appDesc',
      appEntry: 'appEntry',
      appId: 'appId',
      appName: 'appName',
      enterpriseId: 'enterpriseId',
      envs: 'envs',
      featureDesc: 'featureDesc',
      iconUrl: 'iconUrl',
      imageUrls: 'imageUrls',
      instructionUrl: 'instructionUrl',
      manageType: 'manageType',
      mobiId: 'mobiId',
      owner: 'owner',
      pbcs: 'pbcs',
      pluginList: 'pluginList',
      privateInfo: 'privateInfo',
      productId: 'productId',
      scopes: 'scopes',
      sidebar: 'sidebar',
      unbindEffect: 'unbindEffect',
      unbindReasons: 'unbindReasons',
      updatedFeature: 'updatedFeature',
      version: 'version',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDesc: 'string',
      appEntry: 'string',
      appId: 'number',
      appName: 'string',
      enterpriseId: 'number',
      envs: { 'type': 'array', 'itemType': 'string' },
      featureDesc: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      iconUrl: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      instructionUrl: 'string',
      manageType: 'string',
      mobiId: 'number',
      owner: 'string',
      pbcs: { 'type': 'array', 'itemType': 'number' },
      pluginList: { 'type': 'array', 'itemType': AppPluginInfo },
      privateInfo: { 'type': 'array', 'itemType': 'string' },
      productId: 'number',
      scopes: { 'type': 'array', 'itemType': 'string' },
      sidebar: 'string',
      unbindEffect: 'string',
      unbindReasons: { 'type': 'array', 'itemType': 'string' },
      updatedFeature: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      version: 'string',
      versionId: 'number',
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
    if(Array.isArray(this.pluginList)) {
      $dara.Model.validateArray(this.pluginList);
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

