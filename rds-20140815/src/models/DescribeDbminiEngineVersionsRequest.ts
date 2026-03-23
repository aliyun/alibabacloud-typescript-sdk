// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsRequest extends $dara.Model {
  DBInstanceId?: string;
  dedicatedHostGroupId?: string;
  engine?: string;
  engineVersion?: string;
  minorVersionTag?: string;
  nodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerId?: number;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      minorVersionTag: 'MinorVersionTag',
      nodeType: 'NodeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dedicatedHostGroupId: 'string',
      engine: 'string',
      engineVersion: 'string',
      minorVersionTag: 'string',
      nodeType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

