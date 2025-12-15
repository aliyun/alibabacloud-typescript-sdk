// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupCapabilityRequest extends $dara.Model {
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  /**
   * @example
   * true
   */
  supportResourceGroupEvent?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      service: 'Service',
      supportResourceGroupEvent: 'SupportResourceGroupEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      service: 'string',
      supportResourceGroupEvent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

