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
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 能力名称
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityOverview: 'capabilityOverview',
      description: 'description',
      metadata: 'metadata',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityOverview: 'string',
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

