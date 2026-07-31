// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMetadataOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * - enabled: Enable the access channel.
   * - disabled: Disable the access channel.
   * 
   * Default value: enabled.
   * > For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security hardening mode when you access instance metadata. Valid values:
   * 
   * - optional: The security hardening mode is not forcefully used.
   * - required: The security hardening mode is forcefully used. After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * > For more information about instance metadata access modes, see [Instance metadata access modes](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxaz****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access tag feature for instance metadata. Valid values:
   * 
   * - enabled: Enable the feature.
   * - disabled: Disable the feature.
   * 
   * Default value: disabled.
   * <notice>
   * Tag keys must be combinations of letters, digits, at signs (@), colons (:), underscores (_), hyphens (-), periods (.), equal signs (=), and commas (,). Tag keys cannot be "." or "..", or the tags cannot be accessed in the metadata.
   * </notice>
   * 
   * @example
   * disabled
   */
  instanceMetadataTags?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      instanceId: 'InstanceId',
      instanceMetadataTags: 'InstanceMetadataTags',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      instanceId: 'string',
      instanceMetadataTags: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

