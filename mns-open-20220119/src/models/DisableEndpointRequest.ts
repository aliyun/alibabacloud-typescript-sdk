// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint. Valid value:
   * 
   * - **public**: The Internet endpoint. Currently, only public is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

