// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppInfoContent } from "./NeuronAppInfoContent";
import { AppPluginInfo } from "./AppPluginInfo";


export class NeuronAppVersionCreateCmd extends $dara.Model {
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
  envs?: string[];
  featureDesc?: NeuronAppInfoContent[];
  imageUrls?: string[];
  instructionUrl?: string;
  manageType?: string;
  /**
   * @example
   * 1
   */
  mobiId?: number;
  pbcs?: number[];
  pluginList?: AppPluginInfo[];
  privateInfo?: string[];
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      appEntry: 'appEntry',
      appId: 'appId',
      description: 'description',
      envs: 'envs',
      featureDesc: 'featureDesc',
      imageUrls: 'imageUrls',
      instructionUrl: 'instructionUrl',
      manageType: 'manageType',
      mobiId: 'mobiId',
      pbcs: 'pbcs',
      pluginList: 'pluginList',
      privateInfo: 'privateInfo',
      scopes: 'scopes',
      sidebar: 'sidebar',
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
      envs: { 'type': 'array', 'itemType': 'string' },
      featureDesc: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      instructionUrl: 'string',
      manageType: 'string',
      mobiId: 'number',
      pbcs: { 'type': 'array', 'itemType': 'number' },
      pluginList: { 'type': 'array', 'itemType': AppPluginInfo },
      privateInfo: { 'type': 'array', 'itemType': 'string' },
      scopes: { 'type': 'array', 'itemType': 'string' },
      sidebar: 'string',
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

