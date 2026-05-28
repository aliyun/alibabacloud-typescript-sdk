// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShardingPolicyShardGroup extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8
   */
  groupCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      groupCount: 'groupCount',
      keys: 'keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCount: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShardingPolicyShardHash extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keys?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxHashCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      maxHashCount: 'maxHashCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      maxHashCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShardingPolicy extends $dara.Model {
  /**
   * @example
   * 1764659409
   */
  queryActiveTime?: number;
  shardGroup?: ShardingPolicyShardGroup;
  /**
   * @remarks
   * This parameter is required.
   */
  shardHash?: ShardingPolicyShardHash;
  static names(): { [key: string]: string } {
    return {
      queryActiveTime: 'queryActiveTime',
      shardGroup: 'shardGroup',
      shardHash: 'shardHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryActiveTime: 'number',
      shardGroup: ShardingPolicyShardGroup,
      shardHash: ShardingPolicyShardHash,
    };
  }

  validate() {
    if(this.shardGroup && typeof (this.shardGroup as any).validate === 'function') {
      (this.shardGroup as any).validate();
    }
    if(this.shardHash && typeof (this.shardHash as any).validate === 'function') {
      (this.shardHash as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

