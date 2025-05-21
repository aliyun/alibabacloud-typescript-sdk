// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionInfoShrinkRequest extends $dara.Model {
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
  statusListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      projectId: 'projectId',
      statusListShrink: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      statusListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

