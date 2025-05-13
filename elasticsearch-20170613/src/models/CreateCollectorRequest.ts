// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCollectorRequestConfigs } from "./CreateCollectorRequestConfigs";


export class CreateCollectorRequest extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  configs?: CreateCollectorRequestConfigs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp12nu14urf0upaf*****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the created crawer.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      name: 'name',
      resType: 'resType',
      resVersion: 'resVersion',
      vpcId: 'vpcId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': CreateCollectorRequestConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      name: 'string',
      resType: 'string',
      resVersion: 'string',
      vpcId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectorPaths)) {
      $dara.Model.validateArray(this.collectorPaths);
    }
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

