// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoScalingConfigResponseBodyDataBandwidth } from "./DescribeAutoScalingConfigResponseBodyDataBandwidth";
import { DescribeAutoScalingConfigResponseBodyDataResource } from "./DescribeAutoScalingConfigResponseBodyDataResource";
import { DescribeAutoScalingConfigResponseBodyDataShard } from "./DescribeAutoScalingConfigResponseBodyDataShard";
import { DescribeAutoScalingConfigResponseBodyDataSpec } from "./DescribeAutoScalingConfigResponseBodyDataSpec";
import { DescribeAutoScalingConfigResponseBodyDataStorage } from "./DescribeAutoScalingConfigResponseBodyDataStorage";


export class DescribeAutoScalingConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configurations of the automatic bandwidth adjustment feature.
   */
  bandwidth?: DescribeAutoScalingConfigResponseBodyDataBandwidth;
  /**
   * @remarks
   * The configurations of the auto scaling feature for local resources.
   */
  resource?: DescribeAutoScalingConfigResponseBodyDataResource;
  /**
   * @remarks
   * The configurations of the auto scaling feature for shards.
   */
  shard?: DescribeAutoScalingConfigResponseBodyDataShard;
  /**
   * @remarks
   * The configurations of the auto scaling feature for specifications.
   */
  spec?: DescribeAutoScalingConfigResponseBodyDataSpec;
  /**
   * @remarks
   * The configurations of the automatic storage expansion feature.
   */
  storage?: DescribeAutoScalingConfigResponseBodyDataStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: DescribeAutoScalingConfigResponseBodyDataBandwidth,
      resource: DescribeAutoScalingConfigResponseBodyDataResource,
      shard: DescribeAutoScalingConfigResponseBodyDataShard,
      spec: DescribeAutoScalingConfigResponseBodyDataSpec,
      storage: DescribeAutoScalingConfigResponseBodyDataStorage,
    };
  }

  validate() {
    if(this.bandwidth && typeof (this.bandwidth as any).validate === 'function') {
      (this.bandwidth as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.shard && typeof (this.shard as any).validate === 'function') {
      (this.shard as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

