// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicAccelerateIpIdleCountRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
   * 
   * Generate a parameter value from your client to ensure that the value is unique among different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The acceleration region instance ID of the basic Alibaba Cloud Global Accelerator (GA) instance that you want to query.
   * 
   * You can invoke [GetBasicAccelerator](https://help.aliyun.com/document_detail/2253380.html) to query the acceleration region instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The region ID of Global Accelerator. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

