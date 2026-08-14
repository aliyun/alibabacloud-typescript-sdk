// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the authorization. The description can be up to 500 characters in length.
   * 
   * @example
   * Bastionhost demo
   */
  description?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-5yd34ol020a
   */
  instanceId?: string;
  /**
   * @remarks
   * The authorization name. The name must be 1 to 128 characters in length. It cannot start with a special character and can contain only the following special characters: periods (.), underscores (_), hyphens (-), backslashes (\\), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the bastion host. 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of manageable assets associated with the authorization. Valid values:
   * 
   * - **1**: All projects.
   * 
   * - **2**: Specified projects.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  scopeType?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      scopeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

