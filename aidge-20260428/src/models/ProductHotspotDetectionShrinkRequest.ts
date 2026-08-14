// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductHotspotDetectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URLs of reference images that define the SKU whitelist. A maximum of 20 images are supported.
   * 
   * This parameter is required.
   */
  referenceImageUrlsShrink?: string;
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
      referenceImageUrlsShrink: 'ReferenceImageUrls',
      reqId: 'ReqId',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceImageUrlsShrink: 'string',
      reqId: 'string',
      targetImageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

