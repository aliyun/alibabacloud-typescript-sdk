// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterForReqCover } from "./ClusterForReqCover";


export class ClusterForReq extends $dara.Model {
  cover?: ClusterForReqCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  name?: string;
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: ClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      objectId: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

