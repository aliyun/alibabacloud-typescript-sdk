// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLifeCycleEventsRequest extends $dara.Model {
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @example
   * ECS
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

