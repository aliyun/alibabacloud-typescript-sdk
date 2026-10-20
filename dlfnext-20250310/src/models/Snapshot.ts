// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Snapshot extends $dara.Model {
  /**
   * @remarks
   * The file name of the base manifest list.
   * 
   * @example
   * manifest-list-0c6fcaa1-b6bc-413d-9634-6471cce4f37e-2
   */
  baseManifestList?: string;
  /**
   * @remarks
   * The file name of the manifest list that records all changelogs generated for the snapshot.
   * 
   * @example
   * manifest-list-0c6fcaa1-b6bc-413d-9634-6471cce4f37e-4
   * 
   * **if can be null:**
   * true
   */
  changelogManifestList?: string;
  /**
   * @remarks
   * The number of changelog records generated for the snapshot.
   * 
   * @example
   * 100
   */
  changelogRecordCount?: number;
  /**
   * @remarks
   * The transaction ID of the streaming write.
   * 
   * @example
   * 9223372036854775807
   */
  commitIdentifier?: number;
  /**
   * @remarks
   * The streaming write type. Valid values: APPEND, COMPACT, OVERWRITE, and ANALYZE.
   * 
   * @example
   * COMPACT
   */
  commitKind?: string;
  /**
   * @remarks
   * The commit user, which is typically a UUID used to resume streaming writes.
   * 
   * @example
   * 446aac61-bd5c-4fa0-8b14-846fa8810651
   */
  commitUser?: string;
  /**
   * @remarks
   * The file name of the manifest list that records all new changes in the snapshot.
   * 
   * @example
   * manifest-list-0c6fcaa1-b6bc-413d-9634-6471cce4f37e-3
   */
  deltaManifestList?: string;
  /**
   * @remarks
   * The number of new change records in the snapshot.
   * 
   * @example
   * 10
   */
  deltaRecordCount?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * 6
   */
  id?: number;
  /**
   * @remarks
   * The string representation of the snapshot ID.
   * 
   * @example
   * 6
   */
  idString?: string;
  /**
   * @remarks
   * The file name of the manifest that records all index files of the table.
   * 
   * @example
   * index-manifest-7cbdaa47-9578-43ac-ae6e-a7ec0486bba8-0
   */
  indexManifest?: string;
  /**
   * @remarks
   * The log offsets at the time of the commit.
   */
  logOffsets?: { [key: string]: number };
  /**
   * @remarks
   * The string representation of the parent snapshot ID.
   * 
   * @example
   * 0
   */
  parentIdString?: string;
  /**
   * @remarks
   * The schema ID of the table when the snapshot was generated.
   * 
   * @example
   * 0
   */
  schemaId?: number;
  /**
   * @remarks
   * The snapshot sequence number.
   * 
   * @example
   * 1
   */
  sequenceNumber?: number;
  /**
   * @remarks
   * The file name of the table statistics information.
   * 
   * @example
   * stat-82c50592-2179-447b-906b-6fdb10ef32c6-0
   */
  statistics?: string;
  /**
   * @remarks
   * The summary.
   */
  summary?: { [key: string]: string };
  /**
   * @remarks
   * The commit time, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741701564261
   */
  timeMillis?: number;
  /**
   * @remarks
   * The total number of records for all changes in the snapshot.
   * 
   * @example
   * 1024
   */
  totalRecordCount?: number;
  /**
   * @remarks
   * The file format version of the snapshot. The current version is 3.
   * 
   * @example
   * 3
   * 
   * **if can be null:**
   * true
   */
  version?: number;
  /**
   * @remarks
   * The watermark value.
   * 
   * @example
   * -9223372036854775808
   */
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
      idString: 'idString',
      indexManifest: 'indexManifest',
      logOffsets: 'logOffsets',
      parentIdString: 'parentIdString',
      schemaId: 'schemaId',
      sequenceNumber: 'sequenceNumber',
      statistics: 'statistics',
      summary: 'summary',
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
      idString: 'string',
      indexManifest: 'string',
      logOffsets: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      parentIdString: 'string',
      schemaId: 'number',
      sequenceNumber: 'number',
      statistics: 'string',
      summary: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.summary) {
      $dara.Model.validateMap(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

