// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The state of the domain name resolution service. Valid values:
   * 
   * *   uninit: The service is being installed.
   * *   initing: The service is being initialized.
   * *   running: The service is running.
   * *   exception: The service has run into an exception.
   * *   releasing: The service is being released.
   * *   stopped: The service is stopped.
   * *   pending: The service is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The version of the resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

