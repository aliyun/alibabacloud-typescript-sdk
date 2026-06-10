// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePerspectiveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-07-27T07:05:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-07-26T07:05:37Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the perspective.
   * 
   * @example
   * 移动端视角
   */
  name?: string;
  /**
   * @remarks
   * The perspective code (used for the Q\\&A API).
   * 
   * @example
   * FZJBY3raWr
   */
  perspectiveCode?: string;
  /**
   * @remarks
   * The ID of the perspective.
   * 
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the perspective is user-defined.
   * 
   * @example
   * true
   */
  selfDefine?: boolean;
  /**
   * @remarks
   * The status of the perspective. Valid values: 3 (Enabled) and 1 (Disabled).
   * 
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

