// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitMultipartFileUploadRequestOptionPreCheckParam } from "./InitMultipartFileUploadRequestOptionPreCheckParam";


export class InitMultipartFileUploadRequestOption extends $dara.Model {
  preCheckParam?: InitMultipartFileUploadRequestOptionPreCheckParam;
  /**
   * @example
   * ZHANGJIAKOU
   */
  preferRegion?: string;
  /**
   * @example
   * DINGTALK
   */
  storageDriver?: string;
  static names(): { [key: string]: string } {
    return {
      preCheckParam: 'PreCheckParam',
      preferRegion: 'PreferRegion',
      storageDriver: 'StorageDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckParam: InitMultipartFileUploadRequestOptionPreCheckParam,
      preferRegion: 'string',
      storageDriver: 'string',
    };
  }

  validate() {
    if(this.preCheckParam && typeof (this.preCheckParam as any).validate === 'function') {
      (this.preCheckParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

