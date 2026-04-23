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
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  materialId?: string;
  materialType?: string;
  modifiedTime?: string;
  size?: number;
  snapshots?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSnapshots;
  source?: string;
  spriteConfig?: string;
  sprites?: GetEditingProjectMaterialsResponseBodyMaterialListMaterialSprites;
  status?: string;
  tags?: string;
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

