// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationSampleRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  mockOnly?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      mockOnly: 'MockOnly',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockOnly: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

