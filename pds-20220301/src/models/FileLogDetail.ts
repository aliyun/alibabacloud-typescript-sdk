// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileLogDetail extends $dara.Model {
  decompressFileList?: string[];
  newName?: string;
  parentPath?: string;
  revVersion?: number;
  revisionId?: string;
  size?: number;
  toParentPath?: string;
  toParentPathType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      decompressFileList: 'decompress_file_list',
      newName: 'new_name',
      parentPath: 'parent_path',
      revVersion: 'rev_version',
      revisionId: 'revision_id',
      size: 'size',
      toParentPath: 'to_parent_path',
      toParentPathType: 'to_parent_path_type',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decompressFileList: { 'type': 'array', 'itemType': 'string' },
      newName: 'string',
      parentPath: 'string',
      revVersion: 'number',
      revisionId: 'string',
      size: 'number',
      toParentPath: 'string',
      toParentPathType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.decompressFileList)) {
      $dara.Model.validateArray(this.decompressFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

