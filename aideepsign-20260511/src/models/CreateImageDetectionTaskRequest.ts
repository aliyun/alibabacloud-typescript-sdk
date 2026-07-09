// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageDetectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The credential type code. This parameter is required when `DetectType` is set to `credential`. Valid values: `0101` (ID card), `0102` (bank card), `0104` (teacher qualification certificate), `0107` (student ID), `0108` (driver license), `0201` (storefront photo), `0202` (counter photo), `0203` (scene photo), `0301` (business license).
   * 
   * @example
   * 0101
   */
  credType?: string;
  /**
   * @remarks
   * The detection type. Valid values: `auto` (automatic, default), `aigc` (AIGC detection only), `credential` (credential detection only).
   * 
   * @example
   * auto
   */
  detectType?: string;
  /**
   * @remarks
   * The URL of the image to be detected. Only HTTP and HTTPS protocols are supported. You must specify at least one of `ImageUrl` and `ObjectKey`.
   * 
   * @example
   * https://example.com/id-card.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The `ObjectKey` of the image to be detected in OSS. When you use `ObjectKey`, make sure that the key belongs to the namespace of the current caller. You must specify at least one of `ImageUrl` and `ObjectKey`.
   * 
   * @example
   * deepsign/123456789/scan/abc12345.jpg
   */
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      credType: 'CredType',
      detectType: 'DetectType',
      imageUrl: 'ImageUrl',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credType: 'string',
      detectType: 'string',
      imageUrl: 'string',
      objectKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

