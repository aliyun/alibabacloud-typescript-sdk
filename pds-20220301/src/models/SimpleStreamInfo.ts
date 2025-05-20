// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleStreamInfo extends $dara.Model {
  contentHash?: string;
  contentHashName?: string;
  crc64Hash?: string;
  downloadUrl?: string;
  size?: number;
  thumbnail?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      downloadUrl: 'download_url',
      size: 'size',
      thumbnail: 'thumbnail',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      downloadUrl: 'string',
      size: 'number',
      thumbnail: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

