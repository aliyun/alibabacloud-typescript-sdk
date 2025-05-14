// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySearchIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The state of the index. Valid values:
   * 
   * *   active: the index is enabled.
   * *   Deactive: the index is not enabled.
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
   * @example
   * mm
   */
  indexType?: string;
  /**
   * @remarks
   * The total number of media assets.
   * 
   * @example
   * 12
   */
  mediaTotal?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the search library.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
      mediaTotal: 'MediaTotal',
      requestId: 'RequestId',
      searchLibName: 'SearchLibName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexStatus: 'string',
      indexType: 'string',
      mediaTotal: 'string',
      requestId: 'string',
      searchLibName: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

