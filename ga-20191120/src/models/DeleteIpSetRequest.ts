// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance for which you want to delete an acceleration region.
   * 
   * @example
   * ga-bp1yeeq8yfoyszmqy****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * DD61839A-5CC5-404B-8C6E-56066F0C432D
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the acceleration region that you want to delete.
   * 
   * You can call the [ListIpSets](https://help.aliyun.com/document_detail/2253273.html) operation to query the IDs of acceleration regions of a specified GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
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

