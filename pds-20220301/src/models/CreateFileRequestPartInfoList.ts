// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFileRequestPartInfoListParallelSha1Ctx } from "./CreateFileRequestPartInfoListParallelSha1ctx";


export class CreateFileRequestPartInfoList extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash value of the file part. This parameter is required when the MD5 hash value of the file part needs to be verified during part upload.
   * 
   * @example
   * ASKJDJSKDJJSJDJS
   */
  contentMd5?: string;
  /**
   * @remarks
   * The SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  parallelSha1Ctx?: CreateFileRequestPartInfoListParallelSha1Ctx;
  /**
   * @remarks
   * The serial number of a file part. The number starts from 1.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      parallelSha1Ctx: CreateFileRequestPartInfoListParallelSha1Ctx,
      partNumber: 'number',
    };
  }

  validate() {
    if(this.parallelSha1Ctx && typeof (this.parallelSha1Ctx as any).validate === 'function') {
      (this.parallelSha1Ctx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

