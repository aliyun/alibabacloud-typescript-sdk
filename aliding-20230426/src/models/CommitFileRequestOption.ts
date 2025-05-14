// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommitFileRequestOptionAppProperties } from "./CommitFileRequestOptionAppProperties";


export class CommitFileRequestOption extends $dara.Model {
  appProperties?: CommitFileRequestOptionAppProperties[];
  /**
   * @example
   * AUTO_RENAME
   */
  conflictStrategy?: string;
  /**
   * @example
   * false
   */
  convertToOnlineDoc?: boolean;
  /**
   * @example
   * DOC
   */
  convertToOnlineDocTargetDocumentType?: string;
  /**
   * @example
   * 512
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      appProperties: 'AppProperties',
      conflictStrategy: 'ConflictStrategy',
      convertToOnlineDoc: 'ConvertToOnlineDoc',
      convertToOnlineDocTargetDocumentType: 'ConvertToOnlineDocTargetDocumentType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appProperties: { 'type': 'array', 'itemType': CommitFileRequestOptionAppProperties },
      conflictStrategy: 'string',
      convertToOnlineDoc: 'boolean',
      convertToOnlineDocTargetDocumentType: 'string',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appProperties)) {
      $dara.Model.validateArray(this.appProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

