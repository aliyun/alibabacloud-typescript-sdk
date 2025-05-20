// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of a file that is downloaded by using Alibaba Cloud CDN.
   * 
   * @example
   * https://data-cdn.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  cdnUrl?: string;
  /**
   * @remarks
   * The hash value of the file content.
   * 
   * @example
   * EA4942AA8761213890A5C386F88E6464D2C31CA1
   */
  contentHash?: string;
  /**
   * @remarks
   * The name of the algorithm that is used to calculate the hash value of the file content.
   * 
   * @example
   * sha1
   */
  contentHashName?: string;
  /**
   * @remarks
   * The hash value calculated by using 64-bit cyclic redundancy check (CRC-64).
   * 
   * @example
   * 5498595269368962671
   */
  crc64Hash?: string;
  /**
   * @remarks
   * The time when the download URL expires.
   * 
   * @example
   * 2022-01-02T15:04:05.999Z07:00
   */
  expiration?: string;
  /**
   * @remarks
   * The download URL of a file that is downloaded over a virtual private cloud (VPC).
   * 
   * @example
   * https://data-vpc.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  internalUrl?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The download URL of a file that is downloaded over the Internet.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cdnUrl: 'cdn_url',
      contentHash: 'content_hash',
      contentHashName: 'content_hash_name',
      crc64Hash: 'crc64_hash',
      expiration: 'expiration',
      internalUrl: 'internal_url',
      size: 'size',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnUrl: 'string',
      contentHash: 'string',
      contentHashName: 'string',
      crc64Hash: 'string',
      expiration: 'string',
      internalUrl: 'string',
      size: 'number',
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

