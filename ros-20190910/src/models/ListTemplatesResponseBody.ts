// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyTemplatesTags extends $dara.Model {
  /**
   * @remarks
   * Tag key of the template.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * Tag value of the template.
   * 
   * @example
   * test
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

export class ListTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * Supplementary information for public templates.
   * 
   * @example
   * {"DeploymentDuration":null,"Title":"Self-Built_ElasticSearch_Snapshot_Saved_To_OSS","Labels":{"ResourceTypes":["ALIYUN::ECS::Instance","ALIYUN::ECS::SecurityGroup","ALIYUN::ECS::VPC","ALIYUN::ECS::VSwitch","ALIYUN::OSS::Bucket","ALIYUN::ROS::WaitCondition","ALIYUN::ROS::WaitConditionHandle"],"DeployTypes":["ROS"],"ApplicationScenes":["其他"]},"Provider":"ROS","Categories":["Solution"]}
   */
  additionalInfo?: { [key: string]: any };
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2019-10-15T08:17:14.000000
   */
  createTime?: string;
  /**
   * @remarks
   * Template description.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * ID of the Alibaba Cloud account to which the template belongs.
   * 
   * @example
   * 151266687691****
   */
  ownerId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sharing type of the template.
   * 
   * Values:
   * - Private: The template is owned by the user themselves.
   * - Shared: The template is shared by other users.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * Tags of the template.
   */
  tags?: ListTemplatesResponseBodyTemplatesTags[];
  /**
   * @remarks
   * The ARN of the template.
   * 
   * @example
   * acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateARN?: string;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * 4d4f5aa2-3260-4e47-863b-763fbb12****
   */
  templateId?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * demo
   */
  templateName?: string;
  /**
   * @remarks
   * Link to the template
   * 
   * @example
   * https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/demo.yml
   */
  templateUrl?: string;
  /**
   * @remarks
   * Latest template version name.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The last update time of the template.
   * 
   * @example
   * 2019-10-15T08:17:14.000000
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      createTime: 'CreateTime',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateUrl: 'TemplateUrl',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      description: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesTags },
      templateARN: 'string',
      templateId: 'string',
      templateName: 'string',
      templateUrl: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.additionalInfo) {
      $dara.Model.validateMap(this.additionalInfo);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the template list.  
   * Start value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paginated query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A8413B-1F16-4DED-AC3E-61A00718DE8A
   */
  requestId?: string;
  /**
   * @remarks
   * The list of templates.
   */
  templates?: ListTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

