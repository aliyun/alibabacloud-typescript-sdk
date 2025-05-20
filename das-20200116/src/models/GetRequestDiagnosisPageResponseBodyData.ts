// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRequestDiagnosisPageResponseBodyDataList } from "./GetRequestDiagnosisPageResponseBodyDataList";


export class GetRequestDiagnosisPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {"":""}
   */
  extra?: string;
  /**
   * @remarks
   * The SQL diagnostics records returned.
   */
  list?: GetRequestDiagnosisPageResponseBodyDataList[];
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be a positive integer. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetRequestDiagnosisPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

