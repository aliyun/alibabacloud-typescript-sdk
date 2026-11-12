// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate the parameter value on your client and ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly stop the instance.
   * 
   * - **true**: forcibly stops the instance.
   * 
   * - **false** (default): normally stops the instance.
   * 
   * @example
   * true
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance IDs of the simple application servers. The value can be a JSON array that consists of up to 100 instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application server instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the supported Alibaba Cloud regions.
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
      forceStop: 'ForceStop',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceStop: 'boolean',
      instanceIds: 'string',
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

