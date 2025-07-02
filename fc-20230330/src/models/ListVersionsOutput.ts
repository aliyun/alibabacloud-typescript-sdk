// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Version } from "./Version";


export class ListVersionsOutput extends $dara.Model {
  /**
   * @example
   * FORWARD
   */
  direction?: string;
  /**
   * @example
   * 3
   */
  nextToken?: string;
  versions?: Version[];
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      nextToken: 'nextToken',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      nextToken: 'string',
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

