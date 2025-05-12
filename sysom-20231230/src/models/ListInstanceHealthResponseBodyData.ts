// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthResponseBodyData extends $dara.Model {
  images?: string[];
  instance?: string;
  namespace?: string;
  pod?: string;
  regionId?: string;
  score?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'images',
      instance: 'instance',
      namespace: 'namespace',
      pod: 'pod',
      regionId: 'region_id',
      score: 'score',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      instance: 'string',
      namespace: 'string',
      pod: 'string',
      regionId: 'string',
      score: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

