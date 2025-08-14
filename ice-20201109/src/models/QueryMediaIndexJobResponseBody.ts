// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaIndexJobResponseBodyIndexJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The end time of the indexing job.
   * 
   * @example
   * 2023-11-21 11:33:51
   */
  gmtFinish?: string;
  /**
   * @remarks
   * The time when the index job was submitted.
   * 
   * @example
   * 2023-11-21 11:33:50
   */
  gmtSubmit?: string;
  /**
   * @remarks
   * The index type. Valid values:
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
   * The job status. Valid values:
   * 
   * *   Running
   * *   Success
   * *   Fail
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtFinish: 'GmtFinish',
      gmtSubmit: 'GmtSubmit',
      indexType: 'IndexType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtFinish: 'string',
      gmtSubmit: 'string',
      indexType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaIndexJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The indexing jobs enabled for the media asset.
   */
  indexJobInfoList?: QueryMediaIndexJobResponseBodyIndexJobInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
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
      indexJobInfoList: 'IndexJobInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexJobInfoList: { 'type': 'array', 'itemType': QueryMediaIndexJobResponseBodyIndexJobInfoList },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexJobInfoList)) {
      $dara.Model.validateArray(this.indexJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

