// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnswerLibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  answerCount?: number;
  /**
   * @example
   * 2024-06-03 18:15:01
   */
  gmtModified?: string;
  /**
   * @example
   * alxxx
   */
  libId?: string;
  libName?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      answerCount: 'AnswerCount',
      gmtModified: 'GmtModified',
      libId: 'LibId',
      libName: 'LibName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerCount: 'number',
      gmtModified: 'string',
      libId: 'string',
      libName: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnswerLibResponseBody extends $dara.Model {
  data?: ListAnswerLibResponseBodyData[];
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAnswerLibResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

