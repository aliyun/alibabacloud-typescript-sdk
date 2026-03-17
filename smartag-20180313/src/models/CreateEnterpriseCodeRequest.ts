// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically set **ClientToken** to the value of **RequestId**. The value of **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The enterprise code.
   * 
   * The enterprise code must be five characters in length and must contain letters and digits. Each enterprise code must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 12P**
   */
  enterpriseCode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
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

