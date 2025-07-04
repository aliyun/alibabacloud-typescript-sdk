// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexVersionResponseBodyResultIndexVersions } from "./GetIndexVersionResponseBodyResultIndexVersions";


export class GetIndexVersionResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ayoss-cn-zhangjiakou-b
   */
  cluster?: string;
  /**
   * @remarks
   * The index versions.
   */
  indexVersions?: GetIndexVersionResponseBodyResultIndexVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      indexVersions: 'indexVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      indexVersions: { 'type': 'array', 'itemType': GetIndexVersionResponseBodyResultIndexVersions },
    };
  }

  validate() {
    if(Array.isArray(this.indexVersions)) {
      $dara.Model.validateArray(this.indexVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

