// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. By default, the public business type is used.
   * 
   * @example
   * 139440480445****
   */
  bizType?: string;
  /**
   * @remarks
   * The custom text entries. You can specify up to 5 text entries. The value must be a JSON array. You must specify at least one of the Images and Contents parameters.
   * 
   * @example
   * ["Hello","Who are you","Where am I"]
   */
  contents?: string;
  /**
   * @remarks
   * The image URLs. You can specify up to 5 image URLs. The value must be a JSON array. To view the URLs of the images, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Media Management** > **Media List** in the left-side navigation pane. You must set at least one of the Images and Contents parameters. The image to be moderated must meet the following limits. Otherwise, the moderation task may fail.
   * 
   * *   The image size cannot exceed 20 MB, the height or width of the image cannot exceed 30,000 pixels, and the image cannot exceed 0.25 billion pixels.
   * *   We recommend that you upload images of at least 256 × 256 pixels to ensure required moderation result.
   * 
   * @example
   * ["http://``127.66.**.**``/image.jpeg","http://``127.66.**.**``/photo.jpeg"]
   */
  images?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The moderation scenarios. Separate multiple scenarios with commas (,). For example, if you specify {"porn","terrorism"} for this parameter, both pornographic content detection and terrorist content detection are performed on the images and text. Valid values:
   * 
   * *   porn: pornography
   * *   terrorism: terrorist content
   * *   ad: ad violation
   * *   qrcode: QR code
   * *   live: undesirable scene
   * *   logo: special logo
   * *   antispam: text anti-spam (valid only for text)
   * 
   * This parameter is required.
   * 
   * @example
   * ["porn","terrorism","ad"]
   */
  scenes?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contents: 'Contents',
      images: 'Images',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contents: 'string',
      images: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scenes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

