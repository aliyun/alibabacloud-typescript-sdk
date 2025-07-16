// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssistantCapabilityResponseBodyCapabilityAssessmentCapabilityList extends $dara.Model {
  /**
   * @example
   * 能力概览
   */
  capabilityOverview?: string;
  /**
   * @example
   * 能力描述
   */
  description?: string;
  /**
   * @example
   * 能力名称
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityOverview: 'capabilityOverview',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityOverview: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssistantCapabilityResponseBodyCapabilityAssessment extends $dara.Model {
  /**
   * @example
   * 能力概览
   */
  briefCapability?: string;
  /**
   * @example
   * []
   */
  capabilityList?: GetAssistantCapabilityResponseBodyCapabilityAssessmentCapabilityList[];
  static names(): { [key: string]: string } {
    return {
      briefCapability: 'briefCapability',
      capabilityList: 'capabilityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefCapability: 'string',
      capabilityList: { 'type': 'array', 'itemType': GetAssistantCapabilityResponseBodyCapabilityAssessmentCapabilityList },
    };
  }

  validate() {
    if(Array.isArray(this.capabilityList)) {
      $dara.Model.validateArray(this.capabilityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

