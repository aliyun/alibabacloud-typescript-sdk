// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FeatureViewConfigValuePartitionsValue } from "./FeatureViewConfigValuePartitionsValue";
import { FeatureViewConfigValueSnapshotPartitionsValue } from "./FeatureViewConfigValueSnapshotPartitionsValue";


/**
 */
export class FeatureViewConfigValueSnapshot extends $dara.Model {
  /**
   * @remarks
   * The partition configuration for the snapshot.
   */
  partitions?: { [key: string]: FeatureViewConfigValueSnapshotPartitionsValue };
  /**
   * @remarks
   * The name of the snapshot table.
   * 
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
  /**
   * @remarks
   * The list of partitions.
   */
  partitions?: { [key: string]: FeatureViewConfigValuePartitionsValue };
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 1721186536
   */
  eventTime?: string;
  /**
   * @remarks
   * Specifies whether the feature\\"s timestamp must match the event time.
   * 
   * @example
   * False
   */
  equal?: boolean;
  /**
   * @remarks
   * Specifies whether to use a mock data table.
   * 
   * @example
   * True
   */
  useMock?: boolean;
  /**
   * @remarks
   * The snapshot configuration.
   */
  snapshot?: FeatureViewConfigValueSnapshot;
  /**
   * @remarks
   * The second join key.
   * 
   * @example
   * request_id
   */
  secondJoinKey?: string;
  joinWithLabel?: boolean;
  static names(): { [key: string]: string } {
    return {
      partitions: 'Partitions',
      eventTime: 'EventTime',
      equal: 'Equal',
      useMock: 'UseMock',
      snapshot: 'Snapshot',
      secondJoinKey: 'SecondJoinKey',
      joinWithLabel: 'JoinWithLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': FeatureViewConfigValuePartitionsValue },
      eventTime: 'string',
      equal: 'boolean',
      useMock: 'boolean',
      snapshot: FeatureViewConfigValueSnapshot,
      secondJoinKey: 'string',
      joinWithLabel: 'boolean',
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

