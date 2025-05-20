// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadPartInfo } from "./UploadPartInfo";


export class FileStreamInfo extends $dara.Model {
  contentHash?: string;
  contentHashName?: string;
  contentMd5?: string;
  partInfoList?: UploadPartInfo;
  preHash?: string;
  proofCode?: string;
  proofVersion?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      contentMd5: 'content_md5',
      partInfoList: 'part_info_list',
      preHash: 'pre_hash',
      proofCode: 'proof_code',
      proofVersion: 'proof_version',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      contentMd5: 'string',
      partInfoList: UploadPartInfo,
      preHash: 'string',
      proofCode: 'string',
      proofVersion: 'string',
      size: 'number',
    };
  }

  validate() {
    if(this.partInfoList && typeof (this.partInfoList as any).validate === 'function') {
      (this.partInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

