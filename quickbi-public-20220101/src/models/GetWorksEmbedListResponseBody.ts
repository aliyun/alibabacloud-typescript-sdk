// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorksEmbedListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The time when the report was embedded. Format: YYYY-MM-DD hh:mm:ss.
   * 
   * @example
   * YYYY-mm-DD hh:MM:ss
   */
  embedTime?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The report name.
   * 
   * @example
   * Test
   */
  worksName?: string;
  /**
   * @remarks
   * The report type.
   * 
   * @example
   * page
   */
  worksType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the report belongs.
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
   * The report array.
   */
  data?: GetWorksEmbedListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 18
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The request ID.
   * 
   * @example
   * 38C0F*****0-415****9F1-*****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * The report array object.
   */
  result?: GetWorksEmbedListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

