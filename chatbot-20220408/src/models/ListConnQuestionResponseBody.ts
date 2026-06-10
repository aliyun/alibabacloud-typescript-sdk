// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnQuestionResponseBodyOutlines extends $dara.Model {
  /**
   * @remarks
   * The ID of the connected question.
   * 
   * @example
   * 30001979424
   */
  connQuestionId?: number;
  /**
   * @remarks
   * The creation time, in UTC.
   * 
   * @example
   * 2022-02-25T02:47:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The last modification time, in UTC.
   * 
   * @example
   * 2022-05-26T10:18:15Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The relation ID.
   * 
   * @example
   * 797
   */
  outlineId?: number;
  /**
   * @remarks
   * The title of the connected question.
   * 
   * @example
   * 关联问
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      connQuestionId: 'ConnQuestionId',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      outlineId: 'OutlineId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connQuestionId: 'number',
      createTime: 'string',
      modifyTime: 'string',
      outlineId: 'number',
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

export class ListConnQuestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of connected questions.
   */
  outlines?: ListConnQuestionResponseBodyOutlines[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92B81548-42B9-4B34-924B-4E778AEB412B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListConnQuestionResponseBodyOutlines },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

