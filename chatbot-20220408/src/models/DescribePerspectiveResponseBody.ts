// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePerspectiveResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-07-27T07:05:37Z
   */
  createTime?: string;
  /**
   * @example
   * 2021-07-26T07:05:37Z
   */
  modifyTime?: string;
  /**
   * @example
   * 移动端视角
   */
  name?: string;
  /**
   * @example
   * FZJBY3raWr
   */
  perspectiveCode?: string;
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  selfDefine?: boolean;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      name: 'Name',
      perspectiveCode: 'PerspectiveCode',
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
      selfDefine: 'SelfDefine',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      name: 'string',
      perspectiveCode: 'string',
      perspectiveId: 'string',
      requestId: 'string',
      selfDefine: 'boolean',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

