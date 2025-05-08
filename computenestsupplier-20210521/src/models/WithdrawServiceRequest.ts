// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Client token, used to ensure the idempotence of requests. Generate a unique value for this parameter from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters.
   * 
   * @example
   * 788E7CP0EN9D51P
   */
  clientToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

