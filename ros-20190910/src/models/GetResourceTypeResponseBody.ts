// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return values of the resource.
   * 
   * @example
   * 参见示例
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The time when the resource type was created. The time is displayed in UTC+0 and follows the ISO 8601 standard without the trailing Z. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The default version ID.
   * 
   * > This parameter is returned only when the resource type is queried.
   * 
   * @example
   * v1
   */
  defaultVersionId?: string;
  /**
   * @remarks
   * The description of the resource type.
   * 
   * @example
   * It is a demo.
   */
  description?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * 
   * - Resource: a regular resource type. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * 
   * - DataSource: a data source resource type. For more information, see [Data source resources](https://help.aliyun.com/document_detail/404753.html).
   * 
   * - Module: a module.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * - true: The version is the default version.
   * - false: The version is not the default version.
   * > This parameter is returned only when a specific version of the resource type is queried.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The latest version ID.
   * > This parameter is returned only when the resource type is queried.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The properties of the resource.
   * 
   * @example
   * 参见示例
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The resource type provider. Valid values:
   * - ROS: Resource Orchestration Service.
   * - Self: the user.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A28FBA2E-B6B3-5822-AA45-AB875EF23641
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource supports drift detection. Valid values:
   * 
   * - true: Supported.
   * 
   * - false: Not supported.
   * 
   * @example
   * false
   */
  supportDriftDetection?: boolean;
  /**
   * @remarks
   * Indicates whether the resource supports resource scenarios. Valid values:
   * 
   * - true: Supported.
   * 
   * - false: Not supported.
   * 
   * @example
   * false
   */
  supportScratchDetection?: boolean;
  /**
   * @remarks
   * The template content of the module.
   * > This parameter is returned only when a specific version of the resource type is queried.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The total number of versions.
   * > This parameter is returned only when the resource type is queried.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The time when the resource type was updated. The time is displayed in UTC+0 and follows the ISO 8601 standard without the trailing Z. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      defaultVersionId: 'DefaultVersionId',
      description: 'Description',
      entityType: 'EntityType',
      isDefaultVersion: 'IsDefaultVersion',
      latestVersionId: 'LatestVersionId',
      properties: 'Properties',
      provider: 'Provider',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      supportDriftDetection: 'SupportDriftDetection',
      supportScratchDetection: 'SupportScratchDetection',
      templateBody: 'TemplateBody',
      totalVersionCount: 'TotalVersionCount',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      defaultVersionId: 'string',
      description: 'string',
      entityType: 'string',
      isDefaultVersion: 'boolean',
      latestVersionId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      requestId: 'string',
      resourceType: 'string',
      supportDriftDetection: 'boolean',
      supportScratchDetection: 'boolean',
      templateBody: 'string',
      totalVersionCount: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

