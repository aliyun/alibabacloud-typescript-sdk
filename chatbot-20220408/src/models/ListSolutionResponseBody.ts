// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSolutionResponseBodySolutions extends $dara.Model {
  /**
   * @remarks
   * The answer content.
   * 
   * @example
   * Answer content
   */
  content?: string;
  /**
   * @remarks
   * The answer type. Valid values:
   * - 0: plain text.
   * - 1: rich text.
   * 
   * @example
   * 1
   */
  contentType?: number;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2022-03-29T03:55:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2022-03-29T06:23:53Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The list of perspective codes.
   */
  perspectiveCodes?: string[];
  /**
   * @remarks
   * The plain text content of the answer.
   * 
   * @example
   * Answer content
   */
  plainText?: string;
  /**
   * @remarks
   * The answer ID.
   * 
   * @example
   * 496
   */
  solutionId?: number;
  /**
   * @remarks
   * The list of label IDs.
   */
  tagIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      perspectiveCodes: 'PerspectiveCodes',
      plainText: 'PlainText',
      solutionId: 'SolutionId',
      tagIdList: 'TagIdList',
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
      tagIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.perspectiveCodes)) {
      $dara.Model.validateArray(this.perspectiveCodes);
    }
    if(Array.isArray(this.tagIdList)) {
      $dara.Model.validateArray(this.tagIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSolutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B29DB5E-251D-5A73-84B5-A12DF795F231
   */
  requestId?: string;
  /**
   * @remarks
   * The list of answers.
   */
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

