// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the resource.
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T08:25:21
   */
  createTime?: string;
  /**
   * @remarks
   * The default version ID.
   * 
   * > This parameter is returned only if the resource type is queried.
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
   * *   Resource: regular resource. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resource. For more information, see [DataSource resources](https://help.aliyun.com/document_detail/404753.html).
   * *   module: module.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is returned only if a specific version of the resource type is queried.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The latest version ID.
   * 
   * > This parameter is returned only if the resource type is queried.
   * 
   * @example
   * v10
   */
  latestVersionId?: string;
  /**
   * @remarks
   * Indicates whether the resource supports drift detection. Default value: false. Valid values:
   * 
   * *   true: Drift detection is supported.
   * *   false: Drift detection is not supported.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS: The resource type is provided by Resource Orchestration Service (ROS).
   * *   Self: The resource type is provided by you.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The attributes of the resource.
   * 
   * @example
   * A28FBA2E-B6B3-5822-AA45-AB875EF23641
   */
  requestId?: string;
  /**
   * @remarks
   * The properties of the resource.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource supports scratch detection. Default value: false. Valid values:
   * 
   * *   true: Scratch detection is supported.
   * *   false: Scratch detection is not supported.
   * 
   * @example
   * false
   */
  supportDriftDetection?: boolean;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   Resource: resources other than DataSource resources. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resources.
   * 
   * @example
   * false
   */
  supportScratchDetection?: boolean;
  /**
   * @remarks
   * The template content in the module.
   * 
   * > This parameter is returned only if a specific version of the resource type is queried.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The total number of versions.
   * 
   * > This parameter is returned only if the resource type is queried.
   * 
   * @example
   * 10
   */
  totalVersionCount?: number;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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

