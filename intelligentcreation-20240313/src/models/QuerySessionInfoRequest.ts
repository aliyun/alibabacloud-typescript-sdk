// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionInfoRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 805800890535673856
   */
  projectId?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      projectId: 'projectId',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

