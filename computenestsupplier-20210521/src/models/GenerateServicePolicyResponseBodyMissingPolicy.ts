// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServicePolicyResponseBodyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * Operations on specific resources.
   */
  action?: string[];
  /**
   * @remarks
   * The specific objects authorized. An asterisk (*) denotes all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

