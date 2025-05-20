// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadPartInfoParallelSha1Ctx } from "./UploadPartInfoParallelSha1ctx";
import { UploadPartInfoParallelSha256Ctx } from "./UploadPartInfoParallelSha256ctx";


export class UploadPartInfo extends $dara.Model {
  /**
   * @example
   * 0CC175B9C0F1B6A831C399E269772661
   */
  etag?: string;
  internalUploadUrl?: string;
  parallelSha1Ctx?: UploadPartInfoParallelSha1Ctx;
  parallelSha256Ctx?: UploadPartInfoParallelSha256Ctx;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  /**
   * @example
   * 1024
   */
  partSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      etag: 'etag',
      internalUploadUrl: 'internal_upload_url',
      parallelSha1Ctx: 'parallel_sha1_ctx',
      parallelSha256Ctx: 'parallel_sha256_ctx',
      partNumber: 'part_number',
      partSize: 'part_size',
      uploadUrl: 'upload_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      etag: 'string',
      internalUploadUrl: 'string',
      parallelSha1Ctx: UploadPartInfoParallelSha1Ctx,
      parallelSha256Ctx: UploadPartInfoParallelSha256Ctx,
      partNumber: 'number',
      partSize: 'number',
      uploadUrl: 'string',
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

