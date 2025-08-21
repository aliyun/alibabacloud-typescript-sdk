// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPerspectivesResponseBodyPerspectives extends $dara.Model {
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-04-29T03:38:54Z
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

export class QueryPerspectivesResponseBody extends $dara.Model {
  perspectives?: QueryPerspectivesResponseBodyPerspectives[];
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectives: 'Perspectives',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectives: { 'type': 'array', 'itemType': QueryPerspectivesResponseBodyPerspectives },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.perspectives)) {
      $dara.Model.validateArray(this.perspectives);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

