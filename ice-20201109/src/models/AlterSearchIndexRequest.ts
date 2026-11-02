// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterSearchIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The index configuration.
   * >Notice:  You must specify either the IndexStatus or IndexConfig parameter.
   * 
   * @example
   * {}
   */
  indexConfig?: string;
  /**
   * @remarks
   * The index status. Default value: Active. Valid values:
   * - Active: Activated.
   * - Deactive: Deactivated.
   * 
   * >Notice:  You must specify either the IndexStatus or IndexConfig parameter.
   * 
   * @example
   * Active
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index type. Valid values:
   * - mm: Large model.
   * - face: Face.
   * - aiLabel: Intelligent tag.
   * 
   * This parameter is required.
   * 
   * @example
   * mm
   */
  indexType?: string;
  /**
   * @remarks
   * The name of the search library.
   * 
   * - If you do not specify the search library name, the search index is created in the default search library of IMS. Default value: ims-default-search-lib.
   * - You can also call the [QuerySearchLib](https://help.aliyun.com/document_detail/2584455.html) operation to query existing search library information.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      indexConfig: 'IndexConfig',
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexConfig: 'string',
      indexStatus: 'string',
      indexType: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

