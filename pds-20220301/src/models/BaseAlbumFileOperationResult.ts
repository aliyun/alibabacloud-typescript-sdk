// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommonFileItem } from "./CommonFileItem";


export class BaseAlbumFileOperationResult extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  file?: CommonFileItem;
  isSucceed?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'error_code',
      errorMessage: 'error_message',
      file: 'file',
      isSucceed: 'is_succeed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      file: CommonFileItem,
      isSucceed: 'boolean',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

