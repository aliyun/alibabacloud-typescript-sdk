// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAddressGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The level of the location.
   * 
   * Valid values:
   * 
   * *   country
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   province
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   city
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   district
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   township
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   */
  addressLevel?: string;
  /**
   * @remarks
   * The locations.
   */
  addressNames?: string[];
  /**
   * @remarks
   * The coordinates of the bottom right vertex of the rectangle. Set the value in the format of latitude,longitude.
   * 
   * @example
   * 40.121,105.2121
   */
  brGeoPoint?: string;
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
   * The method used to generate the thumbnail of an image.
   * 
   * @example
   * image/resize,w_200
   */
  imageThumbnailProcess?: string;
  /**
   * @remarks
   * The coordinates of the top left vertex of the rectangle. Set the value in the format of latitude,longitude.
   * 
   * @example
   * 39.121,101.2121
   */
  tlGeoPoint?: string;
  /**
   * @remarks
   * The method used to generate the thumbnail of a video.
   * 
   * @example
   * video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
   */
  videoThumbnailProcess?: string;
  static names(): { [key: string]: string } {
    return {
      addressLevel: 'address_level',
      addressNames: 'address_names',
      brGeoPoint: 'br_geo_point',
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      tlGeoPoint: 'tl_geo_point',
      videoThumbnailProcess: 'video_thumbnail_process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLevel: 'string',
      addressNames: { 'type': 'array', 'itemType': 'string' },
      brGeoPoint: 'string',
      driveId: 'string',
      imageThumbnailProcess: 'string',
      tlGeoPoint: 'string',
      videoThumbnailProcess: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressNames)) {
      $dara.Model.validateArray(this.addressNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

