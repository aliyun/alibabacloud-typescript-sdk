// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValuePartitionsValue } from "./FeatureViewConfigValuePartitionsValue";
import { FeatureViewConfigValueSnapshotPartitionsValue } from "./FeatureViewConfigValueSnapshotPartitionsValue";


/**
 */
export class FeatureViewConfigValueSnapshot extends $dara.Model {
  partitions?: { [key: string]: FeatureViewConfigValueSnapshotPartitionsValue };
  /**
   * @example
   * table_name
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValueSnapshotPartitionsValue },
      table: 'string',
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeatureViewConfigValue extends $dara.Model {
  partitions?: { [key: string]: FeatureViewConfigValuePartitionsValue };
  /**
   * @example
   * 1721186536
   */
  eventTime?: string;
  equal?: boolean;
  useMock?: boolean;
  snapshot?: FeatureViewConfigValueSnapshot;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      eventTime: 'EventTime',
      equal: 'Equal',
      useMock: 'UseMock',
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValuePartitionsValue },
      eventTime: 'string',
      equal: 'boolean',
      useMock: 'boolean',
      snapshot: FeatureViewConfigValueSnapshot,
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    if(this.snapshot && typeof (this.snapshot as any).validate === 'function') {
      (this.snapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

