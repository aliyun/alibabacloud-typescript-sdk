// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Text extends $dara.Model {
  agentId?: string;
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  desc?: string;
  errMsg?: string;
  gmtCreate?: string;
  gmtModified?: string;
  illustrationTaskIdList?: number[];
  publishStatus?: string;
  textContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  textId?: number;
  /**
   * @example
   * true
   */
  textIllustrationTag?: boolean;
  textModeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Generating
   */
  textStatus?: string;
  textStyleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  textTaskId?: number;
  textThemes?: string[];
  /**
   * @example
   * xxx
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userNameCreate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userNameModified?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      desc: 'desc',
      errMsg: 'errMsg',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      illustrationTaskIdList: 'illustrationTaskIdList',
      publishStatus: 'publishStatus',
      textContent: 'textContent',
      textId: 'textId',
      textIllustrationTag: 'textIllustrationTag',
      textModeType: 'textModeType',
      textStatus: 'textStatus',
      textStyleType: 'textStyleType',
      textTaskId: 'textTaskId',
      textThemes: 'textThemes',
      title: 'title',
      userNameCreate: 'userNameCreate',
      userNameModified: 'userNameModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      desc: 'string',
      errMsg: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      illustrationTaskIdList: { 'type': 'array', 'itemType': 'number' },
      publishStatus: 'string',
      textContent: 'string',
      textId: 'number',
      textIllustrationTag: 'boolean',
      textModeType: 'string',
      textStatus: 'string',
      textStyleType: 'string',
      textTaskId: 'number',
      textThemes: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      userNameCreate: 'string',
      userNameModified: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.illustrationTaskIdList)) {
      $dara.Model.validateArray(this.illustrationTaskIdList);
    }
    if(Array.isArray(this.textThemes)) {
      $dara.Model.validateArray(this.textThemes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

