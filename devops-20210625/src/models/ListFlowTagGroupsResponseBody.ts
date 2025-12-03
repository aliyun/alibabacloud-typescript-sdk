// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowTagGroupsResponseBodyFlowTagGroups extends $dara.Model {
  /**
   * @example
   * 111111111
   */
  creatorAccountId?: string;
  /**
   * @example
   * 111
   */
  id?: number;
  /**
   * @example
   * 11111111
   */
  modiferAccountId?: string;
  /**
   * @example
   * 标签名称
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAccountId: 'creatorAccountId',
      id: 'id',
      modiferAccountId: 'modiferAccountId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListFlowTagGroupsResponseBody extends $dara.Model {
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
  flowTagGroups?: ListFlowTagGroupsResponseBodyFlowTagGroups[];
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
      flowTagGroups: 'flowTagGroups',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      flowTagGroups: { 'type': 'array', 'itemType': ListFlowTagGroupsResponseBodyFlowTagGroups },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.flowTagGroups)) {
      $dara.Model.validateArray(this.flowTagGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

