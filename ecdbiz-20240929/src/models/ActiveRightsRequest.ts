// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveRightsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.2.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the image that is available for the specification in the target region.
   * 
   * @example
   * m-example
   */
  customImageId?: string;
  /**
   * @remarks
   * The size of the data cloud disk, in GiB. Pass this parameter only when the commodity supports this activation parameter.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The desktop type. Specify the value based on the types supported by the selected commodity. Omit this parameter if regular cloud desktops do not have this configuration.
   * 
   * @example
   * eds.business_edition_office.4c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time of the non-hibernation period, in the HH:mm:ss format. This parameter is used together with StartTime.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The hibernation-related options. The compute plan and existing activation rules corresponding to the right are used.
   * 
   * @example
   * 0
   */
  hibernate?: number;
  /**
   * @remarks
   * The display language of the cloud desktop. Valid values: en-US, ja-JP, zh-CN, and zh-HK.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the office network in the target region. This parameter is required when you activate a cloud desktop.
   * 
   * @example
   * cn-hangzhou+dir-example
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy group. This parameter is optional. If you do not specify this parameter, the default policy of the workspace is used.
   * 
   * @example
   * pg-example
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is optional. The ID is specified by the caller and passed through to the activation request.
   * 
   * @example
   * rg-example
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of IDs of the assigned end users. The IDs correspond to the rights in this batch by position. For convenience accounts, pass the EndUserId. The number of IDs must be the same as the number of rights.
   * 
   * @example
   * ["user-example"]
   */
  rightsAssignedUser?: string[];
  /**
   * @remarks
   * The GPU specification. The value is subject to the return value of the rights details.
   * 
   * @example
   * eds.graphics_flagship_pro.8c16g.2g
   */
  rightsGpuSpec?: string;
  /**
   * @remarks
   * The list of IDs of the rights to be activated. Select the rights accessible to the current identity from ListRights. The parameters in the same batch apply to these rights.
   * 
   * @example
   * ["New_beds-example_0001"]
   */
  rightsIds?: string[];
  /**
   * @remarks
   * The area to which the right belongs. This parameter cannot replace the resource region for a new activation request.
   * 
   * @example
   * cn-east
   */
  rightsResourceArea?: string;
  /**
   * @remarks
   * The operating system type of the image used for rights activation.
   * 
   * @example
   * Windows
   */
  rightsResourceImageOs?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides. This parameter is configured separately from the routing region of the POP request.
   * 
   * @example
   * cn-hangzhou
   */
  rightsResourceRegion?: string;
  /**
   * @remarks
   * The resource type of the right. For regular cloud desktops, use Desktop. For other commodities, pass the actual type of the right.
   * 
   * @example
   * Desktop
   */
  rightsResourceType?: string;
  /**
   * @remarks
   * The specification code of the right. The value is subject to the rights query result.
   * 
   * @example
   * eds.business_edition_office.4c8g
   */
  rightsSpec?: string;
  /**
   * @remarks
   * The size of the system cloud disk, in GiB. Pass this parameter only when the commodity supports this activation parameter.
   * 
   * @example
   * 80
   */
  rootDiskSize?: number;
  /**
   * @remarks
   * The start time of the non-hibernation period, in the HH:mm:ss format. This parameter applies only to the corresponding compute plan.
   * 
   * @example
   * 09:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the target office network. Pass the value based on the network type.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of AD workspace IDs used for BusinessJvsCopilotAgent activation.
   * 
   * @example
   * ["ws-example"]
   */
  workspaceIds?: string[];
  /**
   * @remarks
   * The list of WAIDs used for BusinessJvsCopilotAgent activation. Do not pass this parameter for regular cloud desktop activation.
   * 
   * @example
   * ["waid-example"]
   */
  wyidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      customImageId: 'CustomImageId',
      dataDiskSize: 'DataDiskSize',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      hibernate: 'Hibernate',
      language: 'Language',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      resourceGroupId: 'ResourceGroupId',
      rightsAssignedUser: 'RightsAssignedUser',
      rightsGpuSpec: 'RightsGpuSpec',
      rightsIds: 'RightsIds',
      rightsResourceArea: 'RightsResourceArea',
      rightsResourceImageOs: 'RightsResourceImageOs',
      rightsResourceRegion: 'RightsResourceRegion',
      rightsResourceType: 'RightsResourceType',
      rightsSpec: 'RightsSpec',
      rootDiskSize: 'RootDiskSize',
      startTime: 'StartTime',
      vSwitchId: 'VSwitchId',
      workspaceIds: 'WorkspaceIds',
      wyidList: 'WyidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      customImageId: 'string',
      dataDiskSize: 'number',
      desktopType: 'string',
      endTime: 'string',
      hibernate: 'number',
      language: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      resourceGroupId: 'string',
      rightsAssignedUser: { 'type': 'array', 'itemType': 'string' },
      rightsGpuSpec: 'string',
      rightsIds: { 'type': 'array', 'itemType': 'string' },
      rightsResourceArea: 'string',
      rightsResourceImageOs: 'string',
      rightsResourceRegion: 'string',
      rightsResourceType: 'string',
      rightsSpec: 'string',
      rootDiskSize: 'number',
      startTime: 'string',
      vSwitchId: 'string',
      workspaceIds: { 'type': 'array', 'itemType': 'string' },
      wyidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rightsAssignedUser)) {
      $dara.Model.validateArray(this.rightsAssignedUser);
    }
    if(Array.isArray(this.rightsIds)) {
      $dara.Model.validateArray(this.rightsIds);
    }
    if(Array.isArray(this.workspaceIds)) {
      $dara.Model.validateArray(this.workspaceIds);
    }
    if(Array.isArray(this.wyidList)) {
      $dara.Model.validateArray(this.wyidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

