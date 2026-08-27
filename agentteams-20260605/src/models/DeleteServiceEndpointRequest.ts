// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * **Endpoint ID**
   * 
   * This parameter is required.
   * 
   * @example
   * ep-xxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

