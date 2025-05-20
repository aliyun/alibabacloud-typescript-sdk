// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FaceThumbnail } from "./FaceThumbnail";
import { ImageQuality } from "./ImageQuality";
import { SystemTag } from "./SystemTag";


export class ImageMediaMetadata extends $dara.Model {
  /**
   * @example
   * 浙江省杭州市滨江区西兴街道江陵路
   */
  addressLine?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 中国
   */
  country?: string;
  /**
   * @example
   * 滨江区
   */
  district?: string;
  /**
   * @example
   * {"Compression":{"value":"6"},"DateTime":{"value":"2020:08:19 17:11:11"}}
   */
  exif?: string;
  facesThumbnail?: FaceThumbnail[];
  /**
   * @example
   * 1080
   */
  height?: number;
  imageQuality?: ImageQuality;
  imageTags?: SystemTag[];
  /**
   * @example
   * 30.185453,120.218522
   */
  location?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 2006-01-02T15:04:05.000Z07:00
   */
  time?: string;
  /**
   * @example
   * 西兴街道
   */
  township?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      addressLine: 'address_line',
      city: 'city',
      country: 'country',
      district: 'district',
      exif: 'exif',
      facesThumbnail: 'faces_thumbnail',
      height: 'height',
      imageQuality: 'image_quality',
      imageTags: 'image_tags',
      location: 'location',
      province: 'province',
      time: 'time',
      township: 'township',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLine: 'string',
      city: 'string',
      country: 'string',
      district: 'string',
      exif: 'string',
      facesThumbnail: { 'type': 'array', 'itemType': FaceThumbnail },
      height: 'number',
      imageQuality: ImageQuality,
      imageTags: { 'type': 'array', 'itemType': SystemTag },
      location: 'string',
      province: 'string',
      time: 'string',
      township: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.facesThumbnail)) {
      $dara.Model.validateArray(this.facesThumbnail);
    }
    if(this.imageQuality && typeof (this.imageQuality as any).validate === 'function') {
      (this.imageQuality as any).validate();
    }
    if(Array.isArray(this.imageTags)) {
      $dara.Model.validateArray(this.imageTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

