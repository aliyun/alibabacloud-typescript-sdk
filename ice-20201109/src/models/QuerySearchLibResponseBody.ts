// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySearchLibResponseBodyIndexInfo extends $dara.Model {
  indexReadiness?: string;
  indexStatus?: string;
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      indexReadiness: 'IndexReadiness',
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexReadiness: 'string',
      indexStatus: 'string',
      indexType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySearchLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  indexInfo?: QuerySearchLibResponseBodyIndexInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
   * The status of the search library.
   * 
   * Valid values:
   * 
   * *   normal
   * *   deleting
   * *   deleteFail
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
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
      indexInfo: 'IndexInfo',
      requestId: 'RequestId',
      searchLibName: 'SearchLibName',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexInfo: { 'type': 'array', 'itemType': QuerySearchLibResponseBodyIndexInfo },
      requestId: 'string',
      searchLibName: 'string',
      status: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexInfo)) {
      $dara.Model.validateArray(this.indexInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

