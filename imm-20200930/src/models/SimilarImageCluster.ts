// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimilarImage } from "./SimilarImage";


export class SimilarImageCluster extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-02-08T09:42:34.354969088+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The custom tag.
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The similar images.
   */
  files?: SimilarImage[];
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * SimilarImageCluster-748a041e-4ebc-4487-9e74-9c89b1****
   */
  objectId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2023-02-08T09:42:34.354969088+08:00
   */
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

