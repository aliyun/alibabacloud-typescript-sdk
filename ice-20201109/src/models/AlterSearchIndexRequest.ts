// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterSearchIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the index.
   * 
   * >  You must specify either IndexStatus or IndexConfig.
   * 
   * @example
   * {}
   */
  indexConfig?: string;
  /**
   * @remarks
   * The state of the index. Valid values:
   * 
   * *   active (default): the index is enabled.
   * *   Deactive: the index is not enabled.
   * 
   * >  You must specify either IndexStatus or IndexConfig.
   * 
   * @example
   * Active
   */
  indexStatus?: string;
  /**
   * @remarks
   * The category of the index. Valid values:
   * 
   * *   mm: large visual model.
   * *   face: face recognition.
   * *   aiLabel: smart tagging.
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
   * *   If you leave this parameter empty, the search index is created in the default search library of Intelligent Media Service (IMS). Default value: ims-default-search-lib.
   * *   To query information about an existing search library, call the [QuerySearchLib](https://help.aliyun.com/document_detail/2584455.html) API operation.
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

