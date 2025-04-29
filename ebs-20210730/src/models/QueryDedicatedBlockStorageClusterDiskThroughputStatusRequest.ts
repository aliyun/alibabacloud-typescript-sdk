// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the request of SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * This parameter is required.
   * 
   * @example
   * A37597B5-BB99-19B3-85EA-4C2B91F0****
   */
  qosRequestId?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
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
      qosRequestId: 'QosRequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      qosRequestId: 'string',
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

