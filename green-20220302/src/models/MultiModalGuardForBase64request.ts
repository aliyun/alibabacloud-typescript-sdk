// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardForBase64Request extends $dara.Model {
  fileBase64Str?: string;
  /**
   * @remarks
   * The base64-encoded string of the image.
   * 
   * @example
   * {base64}
   */
  imageBase64Str?: string;
  /**
   * @remarks
   * Service
   * 
   * @example
   * query_security_check
   */
  service?: string;
  /**
   * @remarks
   * The service parameters.
   * 
   * @example
   * {"content":"test"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      fileBase64Str: 'FileBase64Str',
      imageBase64Str: 'ImageBase64Str',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBase64Str: 'string',
      imageBase64Str: 'string',
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

