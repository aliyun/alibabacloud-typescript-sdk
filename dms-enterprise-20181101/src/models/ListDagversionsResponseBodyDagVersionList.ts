// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDAGVersionsResponseBodyDagVersionListDagVersion } from "./ListDagversionsResponseBodyDagVersionListDagVersion";


export class ListDAGVersionsResponseBodyDagVersionList extends $dara.Model {
  dagVersion?: ListDAGVersionsResponseBodyDagVersionListDagVersion[];
  static names(): { [key: string]: string } {
    return {
      dagVersion: 'DagVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagVersion: { 'type': 'array', 'itemType': ListDAGVersionsResponseBodyDagVersionListDagVersion },
    };
  }

  validate() {
    if(Array.isArray(this.dagVersion)) {
      $dara.Model.validateArray(this.dagVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

