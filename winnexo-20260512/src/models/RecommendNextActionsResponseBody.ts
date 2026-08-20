// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendNextActionsResponseBodyNextActions extends $dara.Model {
  /**
   * @remarks
   * The recommendation title.
   * 
   * @example
   * Continue analyzing this metric
   */
  actionTitle?: string;
  /**
   * @remarks
   * The skill code.
   * 
   * @example
   * exampleSkillCode
   */
  skillCode?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * Sample skill
   */
  skillName?: string;
  /**
   * @remarks
   * The recommendation type.
   * 
   * @example
   * recommend_reply
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      actionTitle: 'actionTitle',
      skillCode: 'skillCode',
      skillName: 'skillName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTitle: 'string',
      skillCode: 'string',
      skillName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendNextActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. 200 indicates success. A failure returns a backend error code (ERR.* / InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The next-step recommendations.
   */
  nextActions?: RecommendNextActionsResponseBodyNextActions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The meeting reservation title.
   * 
   * @example
   * Sample session title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      nextActions: 'nextActions',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextActions: { 'type': 'array', 'itemType': RecommendNextActionsResponseBodyNextActions },
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextActions)) {
      $dara.Model.validateArray(this.nextActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

