// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerGroupInfo extends $dara.Model {
  /**
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @example
   * api-consumer-group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      gatewayType: 'gatewayType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      gatewayType: 'string',
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

