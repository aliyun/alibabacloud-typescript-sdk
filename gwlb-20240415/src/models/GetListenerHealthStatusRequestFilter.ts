// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerHealthStatusRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition name. You can filter by one or more filter condition names. The URL must meet the following requirements:
   * 
   * *   **Status**: the health status.
   * *   **ReasonCode**: the cause of an unhealthy server.
   * *   **ServerId**: the ID of the backend server.
   * *   **ServerIp**: the IP address of the backend server.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * The filter condition values. You can specify at most 20 condition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

