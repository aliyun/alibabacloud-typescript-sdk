// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityResponseBodyCapabilityAssessmentCapabilityList } from "./GetAssistantCapabilityResponseBodyCapabilityAssessmentCapabilityList";


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

