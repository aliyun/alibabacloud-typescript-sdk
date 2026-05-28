// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service is activated.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Current status.
   * 
   * *   Opened: The service is activated.
   * *   NotExist: The service does not exist.
   * *   Opening: The service is activating.
   * *   Closed: The service has overdue payments and is disabled.
   * 
   * @example
   * NotExist
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

