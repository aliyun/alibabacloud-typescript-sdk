// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveCustomImageShareAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts with which you want to unshare the image.
   * 
   * This parameter is required.
   */
  account?: number[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the shared custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-2zehv38jjmwva1ee****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

