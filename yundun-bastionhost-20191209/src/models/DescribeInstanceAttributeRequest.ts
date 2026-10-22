// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance to query.
   *  > You can obtain the Bastionhost instance ID by calling the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to query.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

