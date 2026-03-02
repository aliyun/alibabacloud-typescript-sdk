// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpImage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-v12wpq
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20220421100717_prepub
   */
  imageTag?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'imageId',
      imageTag: 'imageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

