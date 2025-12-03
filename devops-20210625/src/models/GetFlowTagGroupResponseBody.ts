// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowTagGroupResponseBodyFlowTagGroupFlowTagList extends $dara.Model {
  /**
   * @example
   * #1F9AEF
   */
  color?: string;
  /**
   * @example
   * 1111111111111
   */
  creatorAccountId?: string;
  /**
   * @example
   * 111
   */
  id?: number;
  /**
   * @example
   * 1111111111111
   */
  modiferAccountId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      creatorAccountId: 'creatorAccountId',
      id: 'id',
      modiferAccountId: 'modiferAccountId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      creatorAccountId: 'string',
      id: 'number',
      modiferAccountId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowTagGroupResponseBodyFlowTagGroup extends $dara.Model {
  /**
   * @example
   * 1111111111111
   */
  creatorAccountId?: string;
  flowTagList?: GetFlowTagGroupResponseBodyFlowTagGroupFlowTagList[];
  /**
   * @example
   * 1111
   */
  id?: number;
  /**
   * @example
   * 1111111111111
   */
  modiferAccountId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      flowTagList: 'flowTagList',
      id: 'id',
      modiferAccountId: 'modiferAccountId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAccountId: 'string',
      flowTagList: { 'type': 'array', 'itemType': GetFlowTagGroupResponseBodyFlowTagGroupFlowTagList },
      id: 'number',
      modiferAccountId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowTagList)) {
      $dara.Model.validateArray(this.flowTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowTagGroupResponseBody extends $dara.Model {
  /**
   * @example
   * ”“
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  flowTagGroup?: GetFlowTagGroupResponseBodyFlowTagGroup;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true 接口调用成功，false 接口调用失败
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      flowTagGroup: 'flowTagGroup',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      flowTagGroup: GetFlowTagGroupResponseBodyFlowTagGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.flowTagGroup && typeof (this.flowTagGroup as any).validate === 'function') {
      (this.flowTagGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

