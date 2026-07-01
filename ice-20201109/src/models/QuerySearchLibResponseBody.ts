// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySearchLibResponseBodyIndexInfo extends $dara.Model {
  /**
   * @remarks
   * The readiness status of the index. Valid values:
   * 
   * - Initializing: The index is being initialized.
   * 
   * - Normal: The index is ready.
   * 
   * - Fail: The index failed to be created.
   * 
   * @example
   * Normal
   */
  indexReadiness?: string;
  /**
   * @remarks
   * The status of the index. Valid values:
   * 
   * - Active: The index is active.
   * 
   * - Deactive: The index is inactive.
   * 
   * @example
   * Active
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index type. Valid values:
   * 
   * - mm: Large language model (LLM).
   * 
   * - face: Face recognition.
   * 
   * - aiLabel: Smart tagging.
   * 
   * @example
   * face
   */
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The index information.
   */
  indexInfo?: QuerySearchLibResponseBodyIndexInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The search library configuration.
   * 
   * @example
   * {"faceGroupIds":"xxx1,xxx2,xx3"}
   */
  searchLibConfig?: string;
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
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
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
      searchLibConfig: 'SearchLibConfig',
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
      searchLibConfig: 'string',
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

