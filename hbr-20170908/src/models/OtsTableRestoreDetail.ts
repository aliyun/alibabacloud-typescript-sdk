// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OtsTableRestoreDetail extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent processes for each restore job.
   * 
   * @example
   * 0
   */
  batchChannelCount?: number;
  /**
   * @remarks
   * The name prefixes of the indexes that you want to restore.
   * 
   * @example
   * 2022xxxx143933
   */
  indexNameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to overwrite existing tables.
   * 
   * @example
   * true
   */
  overwriteExisting?: boolean;
  /**
   * @remarks
   * Specifies whether to regenerate auto-increment primary keys.
   * 
   * @example
   * true
   */
  reGenerateAutoIncrementPK?: boolean;
  /**
   * @remarks
   * Specifies whether to restore indexes.
   * 
   * @example
   * true
   */
  restoreIndex?: boolean;
  /**
   * @remarks
   * Specifies whether to restore search indexes.
   * 
   * @example
   * true
   */
  restoreSearchIndex?: boolean;
  /**
   * @remarks
   * The name prefixes of the search indexes that you want to restore.
   * 
   * @example
   * 2022xxxx143933
   */
  searchIndexNameSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      indexNameSuffix: 'IndexNameSuffix',
      overwriteExisting: 'OverwriteExisting',
      reGenerateAutoIncrementPK: 'ReGenerateAutoIncrementPK',
      restoreIndex: 'RestoreIndex',
      restoreSearchIndex: 'RestoreSearchIndex',
      searchIndexNameSuffix: 'SearchIndexNameSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      indexNameSuffix: 'string',
      overwriteExisting: 'boolean',
      reGenerateAutoIncrementPK: 'boolean',
      restoreIndex: 'boolean',
      restoreSearchIndex: 'boolean',
      searchIndexNameSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

