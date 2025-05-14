// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecognizeIntentionRequestGlobalIntentionList } from "./RecognizeIntentionRequestGlobalIntentionList";
import { RecognizeIntentionRequestHierarchicalIntentionList } from "./RecognizeIntentionRequestHierarchicalIntentionList";
import { RecognizeIntentionRequestIntentionList } from "./RecognizeIntentionRequestIntentionList";


export class RecognizeIntentionRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversation?: string;
  globalIntentionList?: RecognizeIntentionRequestGlobalIntentionList[];
  hierarchicalIntentionList?: RecognizeIntentionRequestHierarchicalIntentionList[];
  intentionDomainCode?: string;
  intentionList?: RecognizeIntentionRequestIntentionList[];
  /**
   * @example
   * common
   */
  opType?: string;
  /**
   * @example
   * false
   */
  recommend?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversation: 'conversation',
      globalIntentionList: 'globalIntentionList',
      hierarchicalIntentionList: 'hierarchicalIntentionList',
      intentionDomainCode: 'intentionDomainCode',
      intentionList: 'intentionList',
      opType: 'opType',
      recommend: 'recommend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversation: 'string',
      globalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestGlobalIntentionList },
      hierarchicalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestHierarchicalIntentionList },
      intentionDomainCode: 'string',
      intentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestIntentionList },
      opType: 'string',
      recommend: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.globalIntentionList)) {
      $dara.Model.validateArray(this.globalIntentionList);
    }
    if(Array.isArray(this.hierarchicalIntentionList)) {
      $dara.Model.validateArray(this.hierarchicalIntentionList);
    }
    if(Array.isArray(this.intentionList)) {
      $dara.Model.validateArray(this.intentionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

