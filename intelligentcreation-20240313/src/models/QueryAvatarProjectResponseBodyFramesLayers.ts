// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAvatarProjectResponseBodyFramesLayersMaterial } from "./QueryAvatarProjectResponseBodyFramesLayersMaterial";


export class QueryAvatarProjectResponseBodyFramesLayers extends $dara.Model {
  height?: number;
  index?: number;
  material?: QueryAvatarProjectResponseBodyFramesLayersMaterial;
  positionX?: number;
  positionY?: number;
  type?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      index: 'index',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      index: 'number',
      material: QueryAvatarProjectResponseBodyFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

