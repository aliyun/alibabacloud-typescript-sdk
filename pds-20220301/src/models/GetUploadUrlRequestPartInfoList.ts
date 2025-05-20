// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUploadUrlRequestPartInfoListParallelSha1Ctx } from "./GetUploadUrlRequestPartInfoListParallelSha1ctx";
import { GetUploadUrlRequestPartInfoListParallelSha256Ctx } from "./GetUploadUrlRequestPartInfoListParallelSha256ctx";


export class GetUploadUrlRequestPartInfoList extends $dara.Model {
  contentMd5?: string;
  contentType?: string;
  /**
   * @remarks
   * The SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  parallelSha1Ctx?: GetUploadUrlRequestPartInfoListParallelSha1Ctx;
  parallelSha256Ctx?: GetUploadUrlRequestPartInfoListParallelSha256Ctx;
  /**
   * @remarks
   * The serial number of a part.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      contentMd5: 'content_md5',
      contentType: 'content_type',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      parallelSha256Ctx: 'parallel_sha256_ctx',
      partNumber: 'part_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMd5: 'string',
      contentType: 'string',
      parallelSha1Ctx: GetUploadUrlRequestPartInfoListParallelSha1Ctx,
      parallelSha256Ctx: GetUploadUrlRequestPartInfoListParallelSha256Ctx,
      partNumber: 'number',
    };
  }

  validate() {
    if(this.parallelSha1Ctx && typeof (this.parallelSha1Ctx as any).validate === 'function') {
      (this.parallelSha1Ctx as any).validate();
    }
    if(this.parallelSha256Ctx && typeof (this.parallelSha256Ctx as any).validate === 'function') {
      (this.parallelSha256Ctx as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

