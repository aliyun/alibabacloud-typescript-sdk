// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is added to the custom image. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 64 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the custom image. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 64 characters in length, and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data disk snapshot.
   * 
   * @example
   * s-acscasca****
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom image. The name must be 2 to 128 characters in length and must start with a letter, a Chinese character, or a digit. It can contain digits, colons (:), underscores (_), and hyphens (-). Default value: empty.
   * 
   * This parameter is required.
   * 
   * @example
   * customImage-test
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID of the specified Simple Application Server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the system disk snapshot.
   * 
   * @example
   * s-acscasca****
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: CreateCustomImageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      systemSnapshotId: 'SystemSnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      description: 'string',
      imageName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      systemSnapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCustomImageRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

