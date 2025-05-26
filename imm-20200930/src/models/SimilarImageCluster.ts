// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimilarImage } from "./SimilarImage";


export class SimilarImageCluster extends $dara.Model {
  createTime?: string;
  customLabels?: { [key: string]: any };
  files?: SimilarImage[];
  objectId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customLabels: 'CustomLabels',
      files: 'Files',
      objectId: 'ObjectId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      files: { 'type': 'array', 'itemType': SimilarImage },
      objectId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

