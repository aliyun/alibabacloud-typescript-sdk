// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadUrlRequestPartInfoListParallelSha1Ctx extends $dara.Model {
  /**
   * @remarks
   * The first to fifth 32-bit variables of the SHA-1 hash value of the file content before the file part. This parameter takes effect only if the parallel upload feature is enabled.
   */
  h?: number[];
  /**
   * @remarks
   * The size of the file part. Unit: bytes. The value must be a multiple of 64. This parameter takes effect only if the parallel upload feature is enabled.
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

export class GetUploadUrlRequestPartInfoListParallelSha256Ctx extends $dara.Model {
  h?: number[];
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

export class GetUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d5b846942cf94fa72324c14a4bda34e81da635d
   */
  fileId?: string;
  /**
   * @remarks
   * The information about the file parts.
   * 
   * This parameter is required.
   */
  partInfoList?: GetUploadUrlRequestPartInfoList[];
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the upload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10166D06127B413BA1EC8ABB1144D111
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      partInfoList: 'part_info_list',
      shareId: 'share_id',
      uploadId: 'upload_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      partInfoList: { 'type': 'array', 'itemType': GetUploadUrlRequestPartInfoList },
      shareId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.partInfoList)) {
      $dara.Model.validateArray(this.partInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

