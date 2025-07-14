// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorksEmbedListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Embed time
   * 
   * @example
   * YYYY-mm-DD hh:MM:ss
   */
  embedTime?: string;
  /**
   * @remarks
   * Report ID
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * test
   */
  worksName?: string;
  /**
   * @remarks
   * Report type
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 87c6b145-****-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      embedTime: 'EmbedTime',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedTime: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of reports
   */
  data?: GetWorksEmbedListResponseBodyResultData[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 18
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWorksEmbedListResponseBodyResultData },
      pageNo: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 38C0F*****0-415****9F1-*****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * Array of report objects
   */
  result?: GetWorksEmbedListResponseBodyResult;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetWorksEmbedListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

