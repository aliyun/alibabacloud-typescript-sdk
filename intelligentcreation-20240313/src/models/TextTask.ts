// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReferenceTag } from "./ReferenceTag";
import { Text } from "./Text";


export class TextTask extends $dara.Model {
  agentId?: string;
  agentName?: string;
  /**
   * @example
   * 九寨沟三日游攻略
   */
  contentRequirement?: string;
  gmtCreate?: string;
  gmtModified?: string;
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nums?: number;
  /**
   * @example
   * xxx
   */
  point?: string;
  referenceTag?: ReferenceTag;
  relatedRagIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  textIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  textTaskId?: number;
  textTaskStatus?: string;
  texts?: Text[];
  /**
   * @example
   * 旅游路线
   */
  theme?: string;
  themeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      contentRequirement: 'contentRequirement',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      introduction: 'introduction',
      nums: 'nums',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagIds: 'relatedRagIds',
      style: 'style',
      target: 'target',
      textIds: 'textIds',
      textModeType: 'textModeType',
      textTaskId: 'textTaskId',
      textTaskStatus: 'textTaskStatus',
      texts: 'texts',
      theme: 'theme',
      themeDesc: 'themeDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      contentRequirement: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      introduction: 'string',
      nums: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagIds: { 'type': 'array', 'itemType': 'number' },
      style: 'string',
      target: 'string',
      textIds: { 'type': 'array', 'itemType': 'number' },
      textModeType: 'string',
      textTaskId: 'number',
      textTaskStatus: 'string',
      texts: { 'type': 'array', 'itemType': Text },
      theme: 'string',
      themeDesc: 'string',
    };
  }

  validate() {
    if(this.referenceTag && typeof (this.referenceTag as any).validate === 'function') {
      (this.referenceTag as any).validate();
    }
    if(Array.isArray(this.relatedRagIds)) {
      $dara.Model.validateArray(this.relatedRagIds);
    }
    if(Array.isArray(this.textIds)) {
      $dara.Model.validateArray(this.textIds);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

