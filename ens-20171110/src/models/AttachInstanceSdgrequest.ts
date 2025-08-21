// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceSDGRequestLoadOpt extends $dara.Model {
  blockRwSplit?: boolean;
  blockRwSplitSize?: number;
  cache?: boolean;
  cacheSize?: number;
  static names(): { [key: string]: string } {
    return {
      blockRwSplit: 'BlockRwSplit',
      blockRwSplitSize: 'BlockRwSplitSize',
      cache: 'Cache',
      cacheSize: 'CacheSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRwSplit: 'boolean',
      blockRwSplitSize: 'number',
      cache: 'boolean',
      cacheSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceSDGRequest extends $dara.Model {
  diskAccessProtocol?: string;
  diskType?: string;
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  loadOpt?: AttachInstanceSDGRequestLoadOpt;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      diskAccessProtocol: 'DiskAccessProtocol',
      diskType: 'DiskType',
      instanceIds: 'InstanceIds',
      loadOpt: 'LoadOpt',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskAccessProtocol: 'string',
      diskType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      loadOpt: AttachInstanceSDGRequestLoadOpt,
      SDGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.loadOpt && typeof (this.loadOpt as any).validate === 'function') {
      (this.loadOpt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

