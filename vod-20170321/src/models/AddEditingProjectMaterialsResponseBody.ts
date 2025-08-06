// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsResponseBodyMaterialList extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 1000487543
   */
  cateId?: number;
  /**
   * @remarks
   * The category name of the material.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL.
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the material was created. The time follows the ISO 8601 standard in the *YYYY-MM-DD**Thh:mm:ss* format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-02T08:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1234751840694470
   */
  customerId?: number;
  /**
   * @remarks
   * The description of the material.
   * 
   * @example
   * test material
   */
  description?: string;
  /**
   * @remarks
   * The duration of the material. Unit: seconds. The value is accurate to four decimal places.
   * 
   * @example
   * 3690.2332
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the material.
   * 
   * @example
   * 85befc4118b84c6723e53b80b1****
   */
  materialId?: string;
  /**
   * @remarks
   * The type of the material. Valid values:
   * 
   * *   **video**
   * *   **audio**
   * *   **image**
   * 
   * @example
   * video
   */
  materialType?: string;
  /**
   * @remarks
   * The time when the material was last updated. The time follows the ISO 8601 standard in the *YYYY-MM-DD**Thh:mm:ss* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-25T07:28:34Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The size of the material.
   * 
   * @example
   * 1682694
   */
  size?: number;
  /**
   * @remarks
   * The URLs of snapshots.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The configuration of the sprite snapshot.
   * 
   * @example
   * xxx
   */
  spriteConfig?: string;
  /**
   * @remarks
   * The URLs of sprite snapshots.
   */
  sprites?: string[];
  /**
   * @remarks
   * The status of the material. Valid values:
   * 
   * *   **Normal**
   * *   **Uploading**
   * *   **UploadFail**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tag of the material. Multiple tags are separated by commas (,).
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the material.
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
   * The materials.
   */
  materialList?: AddEditingProjectMaterialsResponseBodyMaterialList[];
  /**
   * @remarks
   * The ID of the request.
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

