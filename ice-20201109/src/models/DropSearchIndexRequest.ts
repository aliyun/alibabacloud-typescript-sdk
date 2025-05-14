// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DropSearchIndexRequest extends $dara.Model {
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
      indexType: 'IndexType',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

