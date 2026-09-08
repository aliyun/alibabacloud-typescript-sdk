// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowlogRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
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

export class CreateFlowlogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The capture window duration of the flow log. Unit: seconds. Valid values: **60** and **600**. Default value: **600**.
   * 
   * @example
   * 600
   */
  interval?: number;
  /**
   * @remarks
   * The string that defines custom flow log record fields. 
   * 
   * The format is defined as:
   * `${field 1}${field 2}${field 3}...${field n}`
   * 
   * - If you leave this parameter empty, all default fields are recorded.
   * - If you specify this parameter, because `${srcaddr}${dstaddr}${bytes}` are required fields, the string must start with `${srcaddr}${dstaddr}${bytes}`. For all supported flow log fields, see [Configure a flow log](https://help.aliyun.com/document_detail/339822.html).
   * 
   * @example
   * ${srcaddr}${dstaddr}${bytes}
   */
  logFormatString?: string;
  /**
   * @remarks
   * The Logstore that stores the caught traffic.
   * 
   * - If you have already created a Logstore in the current region, enter the name of the existing Logstore.
   * - If you have not created a Logstore in the current region, specify a custom name for the Logstore. The system automatically creates the Logstore.
   *     The naming rules for the Logstore are as follows:
   * 
   *     - The Logstore name must be unique within the same project.
   *     - The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   *     - The name must start and end with a lowercase letter or digit.
   *     - The name must be 3 to 63 characters in length.
   * 
   * @example
   * flowlog-logstore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The project that stores the caught traffic.
   * 
   * - If you have already created a project in the current region, enter the name of the existing project.
   * - If you have not created a project in the current region, specify a custom name for the project. The system automatically creates the project.
   * 
   *     The project name must be globally unique within the Alibaba Cloud region and cannot be modified after creation. The naming rules are as follows:
   * 
   *     - The project name must be globally unique.
   *     - The name can contain only lowercase letters, digits, and hyphens (-).
   *     - The name must start and end with a lowercase letter or digit.
   *     - The name must be 3 to 63 characters in length.
   * 
   * @example
   * flowlog-project
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
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
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateFlowlogRequestTag[];
  /**
   * @remarks
   * The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
   * 
   * Leave this parameter empty if you want to configure a flow log for a transit router instance.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The transit routing instance ID.
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

