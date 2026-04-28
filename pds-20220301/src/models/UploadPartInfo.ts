// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPartInfoParallelSha1Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to fifth 32-bit variables in the SHA-1 context of the previous part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  h?: number[];
  /**
   * @remarks
   * The total size of all the previous parts. Unit: bytes. The value must be a multiple of 64. This parameter takes effect only if the parallel upload feature is enabled.
   * 
   * @example
   * 10240
   */
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfoParallelSha256Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to eighth 32-bit variables in the SHA-256 context of the previous part.
   */
  h?: number[];
  /**
   * @remarks
   * The total size of all the previous parts. Unit: bytes. The value must be a multiple of 64.
   */
  partOffset?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      partOffset: 'part_offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: { 'type': 'array', 'itemType': 'number' },
      partOffset: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.h)) {
      $dara.Model.validateArray(this.h);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPartInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * "0CC175B9C0F1B6A831C399E269772661"
   */
  etag?: string;
  /**
   * @remarks
   * The internal upload URL that is used for internal access over a virtual private cloud (VPC). If the intelligent domain name feature is enabled, this parameter is not required. This parameter is returned in the upload_url parameter based on the request. If you want to use this parameter, contact Photo and Drive Service (PDS) technical support.
   * 
   * @example
   * https://data-vpc.aliyunpds.com/xxx/xxx?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx&partNumber=1&uploadId=0CC175B9C0F1B6A831C399E269772661
   */
  internalUploadUrl?: string;
  /**
   * @remarks
   * The Secure Hash Algorithm 1 (SHA-1) context of the previous part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  parallelSha1Ctx?: UploadPartInfoParallelSha1Ctx;
  /**
   * @remarks
   * The SHA-256 context of the previous part.
   */
  parallelSha256Ctx?: UploadPartInfoParallelSha256Ctx;
  /**
   * @remarks
   * The serial number of the file part.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  partNumber?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * 1024
   */
  partSize?: number;
  /**
   * @remarks
   * The upload URL. By default, the validity period of the URL is 15 minutes. If the URL expires, you must call the GetUploadUrl operation to obtain another URL. If the intelligent domain name feature is enabled, the internal_upload_url value is returned within the parameter based on the request.
   * 
   * This parameter is required.
   * 
   * @example
   * https://data.aliyunpds.com/xxx/xxx?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx&partNumber=1&uploadId=0CC175B9C0F1B6A831C399E269772661
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

