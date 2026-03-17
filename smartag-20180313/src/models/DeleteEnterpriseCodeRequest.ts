// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnterpriseCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The enterprise code that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  enterpriseCode?: string;
  /**
   * @remarks
   * The ID of the region to which the enterprise code belongs.
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

