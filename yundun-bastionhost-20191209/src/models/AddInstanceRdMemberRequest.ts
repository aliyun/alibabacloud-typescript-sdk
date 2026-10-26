// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceRdMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2ve7h00a
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the member accounts in a resource directory to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * 1857311509574932
   */
  memberId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberId: 'MemberId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberId: 'string',
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

