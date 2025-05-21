// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReferenceTag } from "./ReferenceTag";


export class TextTaskCreateCmd extends $dara.Model {
  agentId?: string;
  /**
   * @example
   * 极氪007新车上市
   */
  contentRequirement?: string;
  /**
   * @example
   * 28274623764834
   */
  idempotentId?: string;
  industry?: string;
  /**
   * @example
   * xxx
   */
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  number?: number;
  /**
   * @example
   * 超强续航
   */
  point?: string;
  referenceTag?: ReferenceTag;
  /**
   * @example
   * 1
   */
  relatedRagIds?: number[];
  /**
   * @example
   * true
   */
  streamApi?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  style?: string;
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textModeType?: string;
  /**
   * @example
   * 旅游路线
   */
  theme?: string;
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      contentRequirement: 'contentRequirement',
      idempotentId: 'idempotentId',
      industry: 'industry',
      introduction: 'introduction',
      number: 'number',
      point: 'point',
      referenceTag: 'referenceTag',
      relatedRagIds: 'relatedRagIds',
      streamApi: 'streamApi',
      style: 'style',
      target: 'target',
      textModeType: 'textModeType',
      theme: 'theme',
      themes: 'themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      contentRequirement: 'string',
      idempotentId: 'string',
      industry: 'string',
      introduction: 'string',
      number: 'number',
      point: 'string',
      referenceTag: ReferenceTag,
      relatedRagIds: { 'type': 'array', 'itemType': 'number' },
      streamApi: 'boolean',
      style: 'string',
      target: 'string',
      textModeType: 'string',
      theme: 'string',
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.referenceTag && typeof (this.referenceTag as any).validate === 'function') {
      (this.referenceTag as any).validate();
    }
    if(Array.isArray(this.relatedRagIds)) {
      $dara.Model.validateArray(this.relatedRagIds);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

