// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPerspectivesResponseBodyPerspectives extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2022-04-29T03:38:54Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The perspective name.
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
   * The perspective ID.
   * 
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @remarks
   * Indicates whether the perspective is custom-defined.
   * 
   * @example
   * true
   */
  selfDefine?: boolean;
  /**
   * @remarks
   * The status of the perspective. Valid values are 3 (enabled) and 1 (disabled).
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
  /**
   * @remarks
   * A list of perspectives.
   */
  perspectives?: QueryPerspectivesResponseBodyPerspectives[];
  /**
   * @remarks
   * The request ID.
   * 
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

