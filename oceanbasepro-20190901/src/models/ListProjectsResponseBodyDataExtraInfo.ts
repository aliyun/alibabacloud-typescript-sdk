// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataExtraInfoSubCondsValue } from "./DataExtraInfoSubCondsValue";
import { DataExtraInfoSubDbsValue } from "./DataExtraInfoSubDbsValue";


export class ListProjectsResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  accessObSource?: boolean;
  /**
   * @example
   * true
   */
  ignoreUnsupportDdl?: boolean;
  /**
   * @example
   * 1689244596
   */
  incrSyncTimestamp?: number;
  /**
   * @example
   * 1689214358
   */
  logServiceStartCheckpoint?: number;
  /**
   * @example
   * -1
   */
  maxConnectorCount?: number;
  /**
   * @example
   * true
   */
  monitoringIncr?: boolean;
  /**
   * @example
   * true
   */
  overwriteConfig?: boolean;
  reverseSubtopics?: string[];
  /**
   * @example
   * 90
   */
  runningProgress?: number;
  /**
   * @example
   * TRANSFER_PRECHECK
   */
  runningStep?: string;
  /**
   * @example
   * 24
   */
  sourceStoreKeptHour?: number;
  /**
   * @example
   * true
   */
  storeIncr?: boolean;
  subConds?: { [key: string]: DataExtraInfoSubCondsValue[] };
  subDbs?: { [key: string]: DataExtraInfoSubDbsValue[] };
  subIds?: { [key: string]: string };
  subtopics?: string[];
  /**
   * @example
   * null
   */
  syncDelay?: number;
  /**
   * @example
   * 1689214358
   */
  syncDelaySampleTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessObSource: 'AccessObSource',
      ignoreUnsupportDdl: 'IgnoreUnsupportDdl',
      incrSyncTimestamp: 'IncrSyncTimestamp',
      logServiceStartCheckpoint: 'LogServiceStartCheckpoint',
      maxConnectorCount: 'MaxConnectorCount',
      monitoringIncr: 'MonitoringIncr',
      overwriteConfig: 'OverwriteConfig',
      reverseSubtopics: 'ReverseSubtopics',
      runningProgress: 'RunningProgress',
      runningStep: 'RunningStep',
      sourceStoreKeptHour: 'SourceStoreKeptHour',
      storeIncr: 'StoreIncr',
      subConds: 'SubConds',
      subDbs: 'SubDbs',
      subIds: 'SubIds',
      subtopics: 'Subtopics',
      syncDelay: 'SyncDelay',
      syncDelaySampleTimestamp: 'SyncDelaySampleTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessObSource: 'boolean',
      ignoreUnsupportDdl: 'boolean',
      incrSyncTimestamp: 'number',
      logServiceStartCheckpoint: 'number',
      maxConnectorCount: 'number',
      monitoringIncr: 'boolean',
      overwriteConfig: 'boolean',
      reverseSubtopics: { 'type': 'array', 'itemType': 'string' },
      runningProgress: 'number',
      runningStep: 'string',
      sourceStoreKeptHour: 'number',
      storeIncr: 'boolean',
      subConds: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubCondsValue } },
      subDbs: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubDbsValue } },
      subIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtopics: { 'type': 'array', 'itemType': 'string' },
      syncDelay: 'number',
      syncDelaySampleTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reverseSubtopics)) {
      $dara.Model.validateArray(this.reverseSubtopics);
    }
    if(this.subConds) {
      $dara.Model.validateMap(this.subConds);
    }
    if(this.subDbs) {
      $dara.Model.validateMap(this.subDbs);
    }
    if(this.subIds) {
      $dara.Model.validateMap(this.subIds);
    }
    if(Array.isArray(this.subtopics)) {
      $dara.Model.validateArray(this.subtopics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

