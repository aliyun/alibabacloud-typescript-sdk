// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppVersionsResponseBodyAppVersions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-f8z0dfa96luomqly****
   */
  imageId?: string;
  /**
   * @example
   * V-Ray
   */
  name?: string;
  /**
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

