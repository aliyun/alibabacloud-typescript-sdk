// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots extends $dara.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites extends $dara.Model {
  sprite?: string[];
  static names(): { [key: string]: string } {
    return {
      sprite: 'Sprite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sprite: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sprite)) {
      $dara.Model.validateArray(this.sprite);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialListMaterial extends $dara.Model {
  /**
   * @remarks
   * The category ID of the material.
   * 
   * @example
   * 100005****
   */
  cateId?: number;
  /**
   * @remarks
   * The category name of the material.
   * 
   * @example
   * test1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the material.
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the material was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-10-19 10:48:17
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the material.
   * 
   * @example
   * test2
   */
  description?: string;
  /**
   * @remarks
   * The duration of the material. The value is rounded to four decimal places. Unit: seconds.
   * 
   * @example
   * 15.16
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
   * The time when the material was last updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-10-19 10:48:17
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The size of the mezzanine file. Unit: byte.
   * 
   * @example
   * 1682694
   */
  size?: number;
  /**
   * @remarks
   * The URLs of material snapshots. The value is an array.
   */
  snapshots?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots;
  /**
   * @remarks
   * The source of the sprite.
   * 
   * @example
   * xxx
   */
  source?: string;
  /**
   * @remarks
   * The configuration of the sprite.
   * 
   * @example
   * xxx
   */
  spriteConfig?: string;
  /**
   * @remarks
   * The URLs of material sprites. The value is an array.
   */
  sprites?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites;
  /**
   * @remarks
   * The status of the material. Valid values:
   * 
   * *   **Normal**: The material is in draft.
   * *   **Producing**: The material is being produced.
   * *   **Produced**: The material was produced.
   * *   **ProduceFailed**: The material failed to be produced.
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
   * editing test
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
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      materialId: 'MaterialId',
      materialType: 'MaterialType',
      modifiedTime: 'ModifiedTime',
      size: 'Size',
      snapshots: 'Snapshots',
      source: 'Source',
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
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      materialId: 'string',
      materialType: 'string',
      modifiedTime: 'string',
      size: 'number',
      snapshots: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots,
      source: 'string',
      spriteConfig: 'string',
      sprites: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites,
      status: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    if(this.sprites && typeof (this.sprites as any).validate === 'function') {
      (this.sprites as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMaterialList extends $dara.Model {
  material?: GetEditingProjectMaterialsResponseBodyMaterialListMaterial[];
  static names(): { [key: string]: string } {
    return {
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      material: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMaterialListMaterial },
    };
  }

  validate() {
    if(Array.isArray(this.material)) {
      $dara.Model.validateArray(this.material);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The materials.
   */
  materialList?: GetEditingProjectMaterialsResponseBodyMaterialList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 746FFA07-8BBB-46B1-3E94E3B2915E****
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
      materialList: GetEditingProjectMaterialsResponseBodyMaterialList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.materialList && typeof (this.materialList as any).validate === 'function') {
      (this.materialList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

