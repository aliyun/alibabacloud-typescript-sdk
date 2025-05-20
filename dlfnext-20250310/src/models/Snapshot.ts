// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Snapshot extends $dara.Model {
  baseManifestList?: string;
  /**
   * **if can be null:**
   * true
   */
  changelogManifestList?: string;
  changelogRecordCount?: number;
  commitIdentifier?: number;
  commitKind?: string;
  commitUser?: string;
  deltaManifestList?: string;
  deltaRecordCount?: number;
  id?: number;
  indexManifest?: string;
  logOffsets?: { [key: string]: number };
  schemaId?: number;
  statistics?: string;
  timeMillis?: number;
  totalRecordCount?: number;
  /**
   * **if can be null:**
   * true
   */
  version?: number;
  watermark?: number;
  static names(): { [key: string]: string } {
    return {
      baseManifestList: 'baseManifestList',
      changelogManifestList: 'changelogManifestList',
      changelogRecordCount: 'changelogRecordCount',
      commitIdentifier: 'commitIdentifier',
      commitKind: 'commitKind',
      commitUser: 'commitUser',
      deltaManifestList: 'deltaManifestList',
      deltaRecordCount: 'deltaRecordCount',
      id: 'id',
      indexManifest: 'indexManifest',
      logOffsets: 'logOffsets',
      schemaId: 'schemaId',
      statistics: 'statistics',
      timeMillis: 'timeMillis',
      totalRecordCount: 'totalRecordCount',
      version: 'version',
      watermark: 'watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseManifestList: 'string',
      changelogManifestList: 'string',
      changelogRecordCount: 'number',
      commitIdentifier: 'number',
      commitKind: 'string',
      commitUser: 'string',
      deltaManifestList: 'string',
      deltaRecordCount: 'number',
      id: 'number',
      indexManifest: 'string',
      logOffsets: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      schemaId: 'number',
      statistics: 'string',
      timeMillis: 'number',
      totalRecordCount: 'number',
      version: 'number',
      watermark: 'number',
    };
  }

  validate() {
    if(this.logOffsets) {
      $dara.Model.validateMap(this.logOffsets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

