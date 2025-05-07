// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Version } from "./Version";


export class ListApplicationVersionsOutput extends $dara.Model {
  direction?: string;
  nextToken?: string;
  requestId?: string;
  versions?: Version[];
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      nextToken: 'nextToken',
      requestId: 'requestId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      nextToken: 'string',
      requestId: 'string',
      versions: { 'type': 'array', 'itemType': Version },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

