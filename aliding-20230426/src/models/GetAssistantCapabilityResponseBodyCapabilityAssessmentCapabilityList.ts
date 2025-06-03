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

