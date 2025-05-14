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
   * id1
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
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
      id: 'id',
      metadata: 'metadata',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantDescription: 'string',
      canHandle: 'boolean',
      capabilityAssessment: GetAssistantCapabilityResponseBodyCapabilityAssessment,
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.capabilityAssessment && typeof (this.capabilityAssessment as any).validate === 'function') {
      (this.capabilityAssessment as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

