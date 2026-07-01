// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchLibResponseBodySearchLibInfoListIndexInfo extends $dara.Model {
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
   * The index status.
   * 
   * Default value: Active. Valid values:
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

export class ListSearchLibResponseBodySearchLibInfoList extends $dara.Model {
  /**
   * @remarks
   * The index information.
   */
  indexInfo?: ListSearchLibResponseBodySearchLibInfoListIndexInfo[];
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
   * The search library.
   * 
   * @example
   * faceSearchLib
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
  static names(): { [key: string]: string } {
    return {
      indexInfo: 'IndexInfo',
      searchLibConfig: 'SearchLibConfig',
      searchLibName: 'SearchLibName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexInfo: { 'type': 'array', 'itemType': ListSearchLibResponseBodySearchLibInfoListIndexInfo },
      searchLibConfig: 'string',
      searchLibName: 'string',
      status: 'string',
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

export class ListSearchLibResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * Search library information.
   */
  searchLibInfoList?: ListSearchLibResponseBodySearchLibInfoList[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      searchLibInfoList: 'SearchLibInfoList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      searchLibInfoList: { 'type': 'array', 'itemType': ListSearchLibResponseBodySearchLibInfoList },
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchLibInfoList)) {
      $dara.Model.validateArray(this.searchLibInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

