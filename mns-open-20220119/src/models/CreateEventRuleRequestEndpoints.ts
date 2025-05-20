// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateEventRuleRequestEndpoints extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http
   */
  endpointType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-xxx-queue
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

