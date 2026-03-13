// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Version } from "./Version";


export class ListVersionsOutput extends $dara.Model {
  /**
   * @remarks
   * The sorting method of versions.
   * 
   * @example
   * FORWARD
   */
  direction?: string;
  /**
   * @remarks
   * The ID of the next version.
   * 
   * @example
   * 3
   */
  nextToken?: string;
  /**
   * @remarks
   * The version IDs.
   */
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

