// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndicesResponseBodyIndicesIndices extends $dara.Model {
  /**
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @example
   * CREATE INDEX testindex ON mynamespace. testcollection
   */
  indexDef?: string;
  /**
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @example
   * mynamespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      indexDef: 'IndexDef',
      indexName: 'IndexName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      indexDef: 'string',
      indexName: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

