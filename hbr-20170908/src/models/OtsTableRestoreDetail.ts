// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OtsTableRestoreDetail extends $dara.Model {
  batchChannelCount?: number;
  indexNameSuffix?: string;
  overwriteExisting?: boolean;
  reGenerateAutoIncrementPK?: boolean;
  restoreIndex?: boolean;
  restoreSearchIndex?: boolean;
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

