// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFlowlogRequestTag } from "./CreateFlowlogRequestTag";


export class CreateFlowlogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, ClientToken is set to the value of RequestId. The value of RequestId for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * The flow log name.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The time window for collecting log data. Unit: seconds. Valid values: **60** and **600**. Default value: **600**.
   * 
   * @example
   * 600
   */
  interval?: number;
  /**
   * @remarks
   * The strings that define the fields in the flow log.
   * 
   * Format: `${Field 1}${Field 2}${Field 3}...{Field n}`
   * 
   * *   If you do not configure this parameter, all fields are included in the flow log.
   * *   If you configure this parameter, start the string with `${srcaddr}${dstaddr}${bytes}` because `${srcaddr}${dstaddr}${bytes}` are required variables. For more information about the fields supported by flow logs, see [Configure a flow log](https://help.aliyun.com/document_detail/339822.html).
   * 
   * @example
   * ${srcaddr}${dstaddr}${bytes}
   */
  logFormatString?: string;
  /**
   * @remarks
   * The Logstore that stores the captured traffic data.
   * 
   * *   If a Logstore is already created in the selected region, enter the name of the Logstore.
   * 
   * *   If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
   * 
   *     *   The name must be unique in a project.
   *     *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   *     *   The name must start and end with a lowercase letter or a digit.
   *     *   The name must be 3 to 63 characters in length,
   * 
   * This parameter is required.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The project that stores the captured traffic data.
   * 
   * *   If a project is already created in the selected region, enter the name of the project.
   * 
   * *   If no projects are created in the selected region, enter a name and the system automatically creates a project.
   * 
   *     The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
   * 
   *     *   The name must be globally unique.
   *     *   The name can contain only lowercase letters, digits, and hyphens (-).
   *     *   The name must start and end with a lowercase letter or a digit.
   *     *   The name must be 3 to 63 characters in length,
   * 
   * This parameter is required.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where the flow log is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify at most 20 tags.
   */
  tag?: CreateFlowlogRequestTag[];
  /**
   * @remarks
   * The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
   * 
   * If you create the flow log for a transfer router, skip this parameter.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-bp1rmwxnk221e3fas****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      flowLogName: 'FlowLogName',
      interval: 'Interval',
      logFormatString: 'LogFormatString',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      flowLogName: 'string',
      interval: 'number',
      logFormatString: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateFlowlogRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
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

