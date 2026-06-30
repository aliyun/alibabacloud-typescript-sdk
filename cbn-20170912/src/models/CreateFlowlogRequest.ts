// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowlogRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https:// `.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https:// `.
   * 
   * Each tag key must have a unique tag value. You can specify up to 20 tag values.
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
   * Generate a value for this parameter from your client. Make sure that the value is unique for each request. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The aggregation interval for the flow log. Unit: seconds. Valid values: **60** and **600**. Default value: **600**.
   * 
   * @example
   * 600
   */
  interval?: number;
  /**
   * @remarks
   * A custom string of log fields for the flow log.
   * 
   * The format is defined as:
   * `${field 1}${field 2}${field 3}...${field n}`
   * 
   * - If you do not specify this parameter, all default fields are logged.
   * 
   * - If you specify this parameter, you must start the string with `${srcaddr}${dstaddr}${bytes}` because these are required parameters. For more information about all supported log fields, see [Configure a flow log](https://help.aliyun.com/document_detail/339822.html).
   * 
   * @example
   * ${srcaddr}${dstaddr}${bytes}
   */
  logFormatString?: string;
  /**
   * @remarks
   * The Logstore that is used to store the captured traffic.
   * 
   * - If you have already created a Logstore in the current region, enter the name of the Logstore.
   * 
   * - If you have not created a Logstore in the current region, you can specify a custom name for the Logstore. The system automatically creates the Logstore.
   *   The name of the Logstore must meet the following requirements:
   * 
   *   - The name must be unique within the same project.
   * 
   *   - It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   *   - It must start and end with a lowercase letter or a digit.
   * 
   *   - It must be 3 to 63 characters in length.
   * 
   * @example
   * flowlog-logstore
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The project that is used to store the captured traffic.
   * 
   * - If you have already created a project in the current region, enter the name of the project.
   * 
   * - If you have not created a project in the current region, you can specify a custom name for the project. The system automatically creates the project.
   * 
   *   A project name must be globally unique within an Alibaba Cloud region and cannot be modified after the project is created. The name must meet the following requirements:
   * 
   *   - The name must be globally unique.
   * 
   *   - It can contain only lowercase letters, digits, and hyphens (-).
   * 
   *   - It must start and end with a lowercase letter or a digit.
   * 
   *   - It must be 3 to 63 characters in length.
   * 
   * @example
   * flowlog-project
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
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
   * The tag.
   * 
   * You can add up to 20 tags in each call.
   */
  tag?: CreateFlowlogRequestTag[];
  /**
   * @remarks
   * The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
   * 
   * If you want to configure a flow log for a transit router instance, do not specify this parameter.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router instance.
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

