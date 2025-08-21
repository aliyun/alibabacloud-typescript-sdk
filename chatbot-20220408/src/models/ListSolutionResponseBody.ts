// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSolutionResponseBodySolutions extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @example
   * 2022-03-29T03:55:04Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-03-29T06:23:53Z
   */
  modifyTime?: string;
  perspectiveCodes?: string[];
  plainText?: string;
  /**
   * @example
   * 496
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'number',
      createTime: 'string',
      modifyTime: 'string',
      perspectiveCodes: { 'type': 'array', 'itemType': 'string' },
      plainText: 'string',
      solutionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionResponseBody extends $dara.Model {
  /**
   * @example
   * 5B29DB5E-251D-5A73-84B5-A12DF795F231
   */
  requestId?: string;
  solutions?: ListSolutionResponseBodySolutions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      solutions: 'Solutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutions: { 'type': 'array', 'itemType': ListSolutionResponseBodySolutions },
    };
  }

  validate() {
    if(Array.isArray(this.solutions)) {
      $dara.Model.validateArray(this.solutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

