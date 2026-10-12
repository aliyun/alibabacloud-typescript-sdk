// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class GetModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The workspace visibility. Valid values:
   * - PRIVATE: Visible only to you and administrators in this workspace.
   * - PUBLIC: Visible to all users in this workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. Describes the domain to which the problem solved by the model belongs, such as nlp (natural language processing) and cv (computer vision).
   * 
   * @example
   * cv
   */
  domain?: string;
  /**
   * @remarks
   * The extra information of the model.
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
   * The UTC time of model creation, in ISO 8601 format.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the latest version was modified, in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ss.sssZ format.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtLatestVersionModifiedTime?: string;
  /**
   * @remarks
   * The time when the model was last modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of model labels.
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
   * 
   * @example
   * General sentiment analysis
   */
  modelDescription?: string;
  /**
   * @remarks
   * The model document.
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
   * 
   * @example
   * Sentiment Analysis
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
   * The ordinal number.
   * 
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @remarks
   * The model origin. Describes the community or organization to which the source model belongs, such as ModelScope and HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @remarks
   * The number of parameters, in millions (M).
   * 
   * @example
   * 3000
   */
  parameterSize?: number;
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
   * The task. Describes the specific problem that the model solves, such as text-classification (text categorization).
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
      gmtLatestVersionModifiedTime: 'GmtLatestVersionModifiedTime',
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
      parameterSize: 'ParameterSize',
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
      gmtLatestVersionModifiedTime: 'string',
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
      parameterSize: 'number',
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

