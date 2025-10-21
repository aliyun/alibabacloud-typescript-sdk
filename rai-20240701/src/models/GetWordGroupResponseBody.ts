// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWordGroupResponseBodyWordInfoList extends $dara.Model {
  /**
   * @remarks
   * Label.
   * 
   * @example
   * Buss.
   */
  label?: string;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * Inv.
   */
  word?: string;
  /**
   * @remarks
   * ID of the successfully added word.
   * 
   * @example
   * 1
   */
  wordId?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      word: 'Word',
      wordId: 'WordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      word: 'string',
      wordId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWordGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * Keyword group name.
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If there is an error, returns the error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Keyword group list.
   */
  wordInfoList?: GetWordGroupResponseBodyWordInfoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupName: 'GroupName',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      wordInfoList: 'WordInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupName: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      wordInfoList: { 'type': 'array', 'itemType': GetWordGroupResponseBodyWordInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.wordInfoList)) {
      $dara.Model.validateArray(this.wordInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

