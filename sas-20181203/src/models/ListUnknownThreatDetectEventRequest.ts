// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectEventRequest extends $dara.Model {
  analyzeResult?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent process path.
   * 
   * @example
   * /bin/bash
   */
  parentProcessPath?: string;
  /**
   * @remarks
   * The process path.
   * 
   * @example
   * /test
   */
  processPath?: string;
  /**
   * @remarks
   * The filter condition. You can filter by instance name or IP address.
   * 
   * @example
   * 10.167.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * - **1**: Unhandled.
   * - **2**: Blocked.
   * - **3**: Ignored.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * @example
   * 18b7336e-d469-473b-af83-8e5420f9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      analyzeResult: 'AnalyzeResult',
      currentPage: 'CurrentPage',
      hashKey: 'HashKey',
      lang: 'Lang',
      pageSize: 'PageSize',
      parentProcessPath: 'ParentProcessPath',
      processPath: 'ProcessPath',
      remark: 'Remark',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeResult: 'string',
      currentPage: 'number',
      hashKey: 'string',
      lang: 'string',
      pageSize: 'number',
      parentProcessPath: 'string',
      processPath: 'string',
      remark: 'string',
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

