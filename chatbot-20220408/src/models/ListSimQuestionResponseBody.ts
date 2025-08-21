// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSimQuestionResponseBodySimQuestions extends $dara.Model {
  /**
   * @example
   * 2022-05-30T02:08:33Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-05-13T03:49:28Z
   */
  modifyTime?: string;
  /**
   * @example
   * 30001979424
   */
  simQuestionId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      simQuestionId: 'SimQuestionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      simQuestionId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * 15CD94CC-CBEB-4189-806C-A132D1F45D51
   */
  requestId?: string;
  simQuestions?: ListSimQuestionResponseBodySimQuestions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      simQuestions: 'SimQuestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      simQuestions: { 'type': 'array', 'itemType': ListSimQuestionResponseBodySimQuestions },
    };
  }

  validate() {
    if(Array.isArray(this.simQuestions)) {
      $dara.Model.validateArray(this.simQuestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

