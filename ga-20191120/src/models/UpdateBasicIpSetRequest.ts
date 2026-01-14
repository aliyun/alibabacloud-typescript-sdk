// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBasicIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the acceleration region. Unit: Mbit/s.
   * 
   * The minimum bandwidth is 2 Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the acceleration region of the basic GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The ID of the region where the basic GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      ipSetId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

