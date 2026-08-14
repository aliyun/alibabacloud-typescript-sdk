// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductHotspotDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URLs of reference images that define the SKU whitelist. A maximum of 20 images are supported.
   * 
   * This parameter is required.
   */
  referenceImageUrls?: string[];
  /**
   * @remarks
   * The unique business ID for this single-scene call.
   * 
   * @example
   * hotspot-request-001
   */
  reqId?: string;
  /**
   * @remarks
   * The HTTPS OSS or CDN URL of the target image to be annotated with bounding boxes.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/scene.jpg
   */
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      referenceImageUrls: 'ReferenceImageUrls',
      reqId: 'ReqId',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceImageUrls: { 'type': 'array', 'itemType': 'string' },
      reqId: 'string',
      targetImageUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.referenceImageUrls)) {
      $dara.Model.validateArray(this.referenceImageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

