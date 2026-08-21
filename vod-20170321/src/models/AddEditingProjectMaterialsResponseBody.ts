// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsResponseBodyMaterialList extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 1000487543
   */
  cateId?: number;
  /**
   * @remarks
   * The material category name.
   * 
   * @example
   * Category 1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the material.
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the material was created. The time follows the format: <i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z (UTC).
   * 
   * @example
   * 2019-10-02T08:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234751840694470
   */
  customerId?: number;
  /**
   * @remarks
   * The material description.
   * 
   * @example
   * Material description
   */
  description?: string;
  /**
   * @remarks
   * The material duration. Unit: seconds. The value is accurate to four decimal places.
   * 
   * @example
   * 3690.2332
   */
  duration?: number;
  /**
   * @remarks
   * The material ID.
   * 
   * @example
   * 85befc4118b84c6723e53b80b1****
   */
  materialId?: string;
  /**
   * @remarks
   * The material type. Valid values:
   * 
   * - **video**: video.
   * - **audio**: audio-only.
   * - **image**: image.
   * 
   * @example
   * video
   */
  materialType?: string;
  /**
   * @remarks
   * The time when the material was last modified. The time follows the format: <i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z (UTC).
   * 
   * @example
   * 2022-11-25T07:28:34Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 1682694
   */
  size?: number;
  /**
   * @remarks
   * The array of snapshot URLs for the material.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The sprite configuration.
   * 
   * @example
   * xxx
   */
  spriteConfig?: string;
  /**
   * @remarks
   * The array of sprite URLs for the material.
   */
  sprites?: string[];
  /**
   * @remarks
   * The material status. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Uploading**: Uploading.
   * - **UploadFail**: Upload failed.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The material tags. Multiple tags are separated by commas (,).
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The material title.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      customerId: 'CustomerId',
      description: 'Description',
      duration: 'Duration',
      materialId: 'MaterialId',
      materialType: 'MaterialType',
      modifyTime: 'ModifyTime',
      size: 'Size',
      snapshots: 'Snapshots',
      spriteConfig: 'SpriteConfig',
      sprites: 'Sprites',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      createTime: 'string',
      customerId: 'number',
      description: 'string',
      duration: 'number',
      materialId: 'string',
      materialType: 'string',
      modifyTime: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      spriteConfig: 'string',
      sprites: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    if(Array.isArray(this.sprites)) {
      $dara.Model.validateArray(this.sprites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEditingProjectMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of materials.
   */
  materialList?: AddEditingProjectMaterialsResponseBodyMaterialList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85237CDA-0B54-5CED-BA10-A8A71AA13C1A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      materialList: 'MaterialList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialList: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMaterialList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.materialList)) {
      $dara.Model.validateArray(this.materialList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

