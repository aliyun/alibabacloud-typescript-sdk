// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FaceThumbnail } from "./FaceThumbnail";
import { ImageQuality } from "./ImageQuality";
import { SystemTag } from "./SystemTag";


export class ImageMediaMetadata extends $dara.Model {
  /**
   * @remarks
   * The full address.
   * 
   * @example
   * Jiangling Road, Xixing Street, Binjiang District, Hangzhou, Zhejiang
   */
  addressLine?: string;
  /**
   * @remarks
   * The city in which the image was taken.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The country or region in which the image was taken.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The district in which the image was taken.
   * 
   * @example
   * Binjiang District
   */
  district?: string;
  /**
   * @remarks
   * The EXIF information about the image.
   * 
   * @example
   * {"Compression":{"value":"6"},"DateTime":{"value":"2020:08:19 17:11:11"}}
   */
  exif?: string;
  /**
   * @remarks
   * The thumbnails of the faces.
   */
  facesThumbnail?: FaceThumbnail[];
  /**
   * @remarks
   * The height of the image. Unit: pixel.
   * 
   * @example
   * 1024
   */
  height?: number;
  /**
   * @remarks
   * The rating of the image.
   */
  imageQuality?: ImageQuality;
  /**
   * @remarks
   * The details of the image tags.
   */
  imageTags?: SystemTag[];
  /**
   * @remarks
   * The location of the image.
   * 
   * @example
   * 30.185453,120.218522
   */
  location?: string;
  /**
   * @remarks
   * The province in which the image was taken.
   * 
   * @example
   * Zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The time when the image was taken. The time follows the RFC3339 standard.
   * 
   * @example
   * 2006-01-02T15:04:05.000Z07:00
   */
  time?: string;
  /**
   * @remarks
   * The street in which the image was taken.
   * 
   * @example
   * Xixing Street
   */
  township?: string;
  /**
   * @remarks
   * The width of the image. Unit: pixel.
   * 
   * @example
   * 1024
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

