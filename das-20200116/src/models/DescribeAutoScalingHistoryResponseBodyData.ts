// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoScalingHistoryResponseBodyDataSpecHistory } from "./DescribeAutoScalingHistoryResponseBodyDataSpecHistory";


export class DescribeAutoScalingHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The history of automatic bandwidth scaling of ApsaraDB for Redis instances. This feature is not supported.
   */
  bandwidth?: { [key: string]: any }[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The history of resource scale-out of ApsaraDB for Redis instances. This feature is not supported.
   */
  resource?: { [key: string]: any }[];
  /**
   * @remarks
   * The history of automatic shard scale-out of ApsaraDB for Redis instances. This feature is not supported.
   */
  shard?: { [key: string]: any }[];
  /**
   * @remarks
   * The history of automatic performance scaling.
   */
  specHistory?: DescribeAutoScalingHistoryResponseBodyDataSpecHistory[];
  /**
   * @remarks
   * The history of storage expansion. This feature is not supported.
   */
  storage?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      specHistory: 'SpecHistory',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      resource: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      shard: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      specHistory: { 'type': 'array', 'itemType': DescribeAutoScalingHistoryResponseBodyDataSpecHistory },
      storage: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidth)) {
      $dara.Model.validateArray(this.bandwidth);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.shard)) {
      $dara.Model.validateArray(this.shard);
    }
    if(Array.isArray(this.specHistory)) {
      $dara.Model.validateArray(this.specHistory);
    }
    if(Array.isArray(this.storage)) {
      $dara.Model.validateArray(this.storage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

