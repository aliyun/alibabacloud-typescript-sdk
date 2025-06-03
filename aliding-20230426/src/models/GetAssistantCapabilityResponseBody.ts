// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityResponseBodyCapabilityAssessment } from "./GetAssistantCapabilityResponseBodyCapabilityAssessment";


export class GetAssistantCapabilityResponseBody extends $dara.Model {
  /**
   * @example
   * 助理描述
   */
  assistantDescription?: string;
  /**
   * @example
   * true
   */
  canHandle?: boolean;
  /**
   * @example
   * {}
   */
  capabilityAssessment?: GetAssistantCapabilityResponseBodyCapabilityAssessment;
  /**
   * @example
   * requestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantDescription: 'assistantDescription',
      canHandle: 'canHandle',
      capabilityAssessment: 'capabilityAssessment',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantDescription: 'string',
      canHandle: 'boolean',
      capabilityAssessment: GetAssistantCapabilityResponseBodyCapabilityAssessment,
      requestId: 'string',
    };
  }

  validate() {
    if(this.capabilityAssessment && typeof (this.capabilityAssessment as any).validate === 'function') {
      (this.capabilityAssessment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

