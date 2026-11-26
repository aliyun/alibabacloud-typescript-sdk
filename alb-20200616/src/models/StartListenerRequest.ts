// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that the value is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: performs only a dry run and does not start the listener. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the **DryRunOperation** error code.
   * 
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, the system returns an `HTTP_2xx` status code and starts the listener.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener on the Application Load Balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-o4u54y73wq7b******
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

