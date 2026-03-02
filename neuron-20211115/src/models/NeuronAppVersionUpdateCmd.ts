// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NeuronAppInfoContent } from "./NeuronAppInfoContent";


export class NeuronAppVersionUpdateCmd extends $dara.Model {
  appEntry?: string;
  /**
   * @example
   * 升级订单功能
   */
  desc?: string;
  envs?: string[];
  featureDesc?: NeuronAppInfoContent[];
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
   * NEURON
   */
  manageType?: string;
  /**
   * @example
   * 1
   */
  mobiId?: number;
  pbcs?: number[];
  privateInfo?: string[];
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
   * 1.相关代码删除
   */
  unbindEffect?: string;
  unbindReasons?: string[];
  updatedFeature?: NeuronAppInfoContent[];
  static names(): { [key: string]: string } {
    return {
      appEntry: 'appEntry',
      desc: 'desc',
      envs: 'envs',
      featureDesc: 'featureDesc',
      id: 'id',
      imageUrls: 'imageUrls',
      instructionUrl: 'instructionUrl',
      manageType: 'manageType',
      mobiId: 'mobiId',
      pbcs: 'pbcs',
      privateInfo: 'privateInfo',
      scopes: 'scopes',
      sidebar: 'sidebar',
      status: 'status',
      unbindEffect: 'unbindEffect',
      unbindReasons: 'unbindReasons',
      updatedFeature: 'updatedFeature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEntry: 'string',
      desc: 'string',
      envs: { 'type': 'array', 'itemType': 'string' },
      featureDesc: { 'type': 'array', 'itemType': NeuronAppInfoContent },
      id: 'number',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      instructionUrl: 'string',
      manageType: 'string',
      mobiId: 'number',
      pbcs: { 'type': 'array', 'itemType': 'number' },
      privateInfo: { 'type': 'array', 'itemType': 'string' },
      scopes: { 'type': 'array', 'itemType': 'string' },
      sidebar: 'string',
      status: 'string',
      unbindEffect: 'string',
      unbindReasons: { 'type': 'array', 'itemType': 'string' },
      updatedFeature: { 'type': 'array', 'itemType': NeuronAppInfoContent },
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

