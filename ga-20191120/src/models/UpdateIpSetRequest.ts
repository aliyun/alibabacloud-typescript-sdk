// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The new bandwidth that you want to allocate to the acceleration region. Unit: Mbit/s.
   * 
   * You must allocate at least 2 Mbit/s of bandwidth to each acceleration region.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
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
   * 7D2F7E4E-B958-439C-9821-56D6213A31EC
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the acceleration region that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
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

