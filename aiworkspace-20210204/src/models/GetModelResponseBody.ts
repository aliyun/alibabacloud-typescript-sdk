// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class GetModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace.
   * 
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The workspace is visible to all users.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. This parameter specifies the domain for which the model is developed. Valid values: nlp and cv. nlp indicates natural language processing and cv indicates computer vision.
   * 
   * @example
   * cv
   */
  domain?: string;
  /**
   * @remarks
   * Other information about the model.
   * 
   * @example
   * {
   * 	"RatingCount": 2866,
   * 	"Rating": 4.94,
   * 	"FavoriteCount": 34992,
   * 	"CommentCount": 754,
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/drea***w.png"],
   * 	"TippedAmountCount": 32,
   * 	"DownloadCount": 606056
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The time when the model is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the model is last modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The model tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the model.
   */
  latestVersion?: ModelVersion;
  /**
   * @remarks
   * The model description.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The documentation of the model.
   * 
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model.
   * 
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. The community or organization to which the model belongs, such as ModelScope or HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The task of the model. This parameter describes specific issues that the model solves, such as text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      requestId: 'RequestId',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      requestId: 'string',
      task: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

