// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @example
   * 2022-12-09T07:06:34Z
   */
  createTime?: string;
  description?: string;
  documentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-bp181x855551ww5yq****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @example
   * app-image
   */
  name?: string;
  osTag?: string;
  updateTime?: string;
  /**
   * @example
   * v1.0
   */
  version?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      documentId: 'DocumentId',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osTag: 'OsTag',
      updateTime: 'UpdateTime',
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      description: 'string',
      documentId: 'number',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osTag: 'string',
      updateTime: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

