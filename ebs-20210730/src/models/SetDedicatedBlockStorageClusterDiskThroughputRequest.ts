// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDedicatedBlockStorageClusterDiskThroughputRequest extends $dara.Model {
  /**
   * @remarks
   * Target throughput.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  bps?: number;
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
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      clientToken: 'string',
      diskId: 'string',
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

