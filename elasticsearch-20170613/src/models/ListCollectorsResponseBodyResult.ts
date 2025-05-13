// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCollectorsResponseBodyResultConfigs } from "./ListCollectorsResponseBodyResultConfigs";
import { ListCollectorsResponseBodyResultExtendConfigs } from "./ListCollectorsResponseBodyResultExtendConfigs";


export class ListCollectorsResponseBodyResult extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * The information about the configuration file of the shipper.
   */
  configs?: ListCollectorsResponseBodyResultConfigs[];
  /**
   * @remarks
   * Indicates whether a dry run is performed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended configurations of the shipper.
   */
  extendConfigs?: ListCollectorsResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * The time when the shipper was created.
   * 
   * @example
   * 2020-08-18T02:06:12.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the shipper was updated.
   * 
   * @example
   * 2020-08-18T09:40:43.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The name of the shipper.
   * 
   * @example
   * FileBeat001
   */
  name?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 168520994880****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the shipper.
   * 
   * @example
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The type of the shipper. Valid values: fileBeat, metricBeat, heartBeat, and auditBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the shipper.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the shipper. Valid values:
   * 
   * *   activating
   * *   active
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the shipper resides.
   * 
   * @example
   * vpc-bp16k1dvzxtma*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
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

