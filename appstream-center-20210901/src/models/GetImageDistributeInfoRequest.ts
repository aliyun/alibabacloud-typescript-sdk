// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageDistributeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image whose region distribution information you want to query.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the image version. If this parameter is not specified, the online version of the image is queried.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

