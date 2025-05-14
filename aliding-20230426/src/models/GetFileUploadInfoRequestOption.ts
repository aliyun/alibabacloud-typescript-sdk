// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileUploadInfoRequestOptionPreCheckParam } from "./GetFileUploadInfoRequestOptionPreCheckParam";


export class GetFileUploadInfoRequestOption extends $dara.Model {
  preCheckParam?: GetFileUploadInfoRequestOptionPreCheckParam;
  /**
   * @example
   * true
   */
  preferIntranet?: boolean;
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
      preferIntranet: 'PreferIntranet',
      preferRegion: 'PreferRegion',
      storageDriver: 'StorageDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckParam: GetFileUploadInfoRequestOptionPreCheckParam,
      preferIntranet: 'boolean',
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

