// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomImagesRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate the value from your client and ensure that it is unique across different requests. **ClientToken** supports only ASCII characters and can be up to 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance IDs of the simple application servers. The value can be a JSON array that consists of multiple instance IDs. You can specify up to 15 IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["m-2zehv38jjmwva1ee****", "m-bp1hj0zhmheyq2kz****"]
   */
  imageIds?: string;
  /**
   * @remarks
   * The region ID. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query available regions.
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
      imageIds: 'ImageIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageIds: 'string',
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

