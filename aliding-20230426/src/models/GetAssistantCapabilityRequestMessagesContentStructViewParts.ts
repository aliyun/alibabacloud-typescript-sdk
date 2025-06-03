// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestMessagesContentStructViewPartsDataPart } from "./GetAssistantCapabilityRequestMessagesContentStructViewPartsDataPart";
import { GetAssistantCapabilityRequestMessagesContentStructViewPartsReasonPart } from "./GetAssistantCapabilityRequestMessagesContentStructViewPartsReasonPart";
import { GetAssistantCapabilityRequestMessagesContentStructViewPartsRecommendPart } from "./GetAssistantCapabilityRequestMessagesContentStructViewPartsRecommendPart";
import { GetAssistantCapabilityRequestMessagesContentStructViewPartsReferencePart } from "./GetAssistantCapabilityRequestMessagesContentStructViewPartsReferencePart";
import { GetAssistantCapabilityRequestMessagesContentStructViewPartsTextPart } from "./GetAssistantCapabilityRequestMessagesContentStructViewPartsTextPart";


export class GetAssistantCapabilityRequestMessagesContentStructViewParts extends $dara.Model {
  append?: boolean;
  /**
   * @example
   * {}
   */
  dataPart?: GetAssistantCapabilityRequestMessagesContentStructViewPartsDataPart;
  finish?: boolean;
  /**
   * @example
   * 这是正文内容部分
   */
  partDesc?: string;
  /**
   * @example
   * artifactId123
   */
  partId?: string;
  /**
   * @example
   * {}
   */
  reasonPart?: GetAssistantCapabilityRequestMessagesContentStructViewPartsReasonPart;
  /**
   * @example
   * {}
   */
  recommendPart?: GetAssistantCapabilityRequestMessagesContentStructViewPartsRecommendPart;
  /**
   * @example
   * {}
   */
  referencePart?: GetAssistantCapabilityRequestMessagesContentStructViewPartsReferencePart;
  /**
   * @example
   * {}
   */
  textPart?: GetAssistantCapabilityRequestMessagesContentStructViewPartsTextPart;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * textPart
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      append: 'append',
      dataPart: 'dataPart',
      finish: 'finish',
      partDesc: 'partDesc',
      partId: 'partId',
      reasonPart: 'reasonPart',
      recommendPart: 'recommendPart',
      referencePart: 'referencePart',
      textPart: 'textPart',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      append: 'boolean',
      dataPart: GetAssistantCapabilityRequestMessagesContentStructViewPartsDataPart,
      finish: 'boolean',
      partDesc: 'string',
      partId: 'string',
      reasonPart: GetAssistantCapabilityRequestMessagesContentStructViewPartsReasonPart,
      recommendPart: GetAssistantCapabilityRequestMessagesContentStructViewPartsRecommendPart,
      referencePart: GetAssistantCapabilityRequestMessagesContentStructViewPartsReferencePart,
      textPart: GetAssistantCapabilityRequestMessagesContentStructViewPartsTextPart,
      type: 'string',
    };
  }

  validate() {
    if(this.dataPart && typeof (this.dataPart as any).validate === 'function') {
      (this.dataPart as any).validate();
    }
    if(this.reasonPart && typeof (this.reasonPart as any).validate === 'function') {
      (this.reasonPart as any).validate();
    }
    if(this.recommendPart && typeof (this.recommendPart as any).validate === 'function') {
      (this.recommendPart as any).validate();
    }
    if(this.referencePart && typeof (this.referencePart as any).validate === 'function') {
      (this.referencePart as any).validate();
    }
    if(this.textPart && typeof (this.textPart as any).validate === 'function') {
      (this.textPart as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

