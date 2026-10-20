// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceSDGRequestLoadOpt extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable block device read/write splitting. Default value: false.
   * 
   * @example
   * true
   */
  blockRwSplit?: boolean;
  /**
   * @remarks
   * The size for block device read/write splitting, in GiB. A value of 0 indicates that the default size is used.
   * 
   * @example
   * 20
   */
  blockRwSplitSize?: number;
  /**
   * @remarks
   * Specifies whether to enable caching. Block device read/write splitting must be enabled before caching can be used. Default value: false.
   * 
   * @example
   * true
   */
  cache?: boolean;
  /**
   * @remarks
   * The cache size, in GiB. A value of 0 indicates that the default size is used.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The cloud disk access protocol type. Valid values:
   * 
   * - iscsi: the default protocol for standard cloud disks. Both rbd cloud disks and standard cloud disks support this protocol.
   * 
   *  - rbd: the default protocol for rbd cloud disks. Only rbd cloud disks support this mount protocol.
   * 
   * @example
   * iscsi
   */
  diskAccessProtocol?: string;
  /**
   * @remarks
   * The type of the shared cloud disk to be created. Valid values:
   * 
   * - standard: standard cloud disk.
   * - rbd: rbd cloud disk.
   * 
   * > 
   * > - If no shared cloud disk type is specified, a standard cloud disk is created by default.
   * > - An rbd shared cloud disk can be created only when the parent disk type is rbd.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The file loading rate optimization parameter.
   */
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

