// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class Model extends $dara.Model {
  /**
   * @remarks
   * The workspace visibility. Valid values:
   * - PRIVATE (default): visible only to yourself and administrators within the workspace.
   * - PUBLIC: visible to all users in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. Describes the domain of the problem that the model solves, such as nlp (natural language processing) or cv (computer vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * The additional information.
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
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the latest version was updated.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtLatestVersionModifiedTime?: string;
  /**
   * @remarks
   * The time when the model was last updated in UTC, in ISO 8601 format.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The label list. This parameter will be deprecated and replaced by Tag.
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
   * Sentiment analysis
   */
  modelDescription?: string;
  /**
   * @remarks
   * The model documentation.
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
   * model-1123*****
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
   * The model type, such as Checkpoint or LoRA.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The model sequence number.
   * 
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @remarks
   * The model origin. Describes the community or organization to which the source model belongs, such as ModelScope or HuggingFace.
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
   * 1557702098******
   */
  ownerId?: string;
  /**
   * @remarks
   * The number of parameters, in millions (M).
   * 
   * @example
   * 1024
   */
  parameterSize?: number;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: Label[];
  /**
   * @remarks
   * The task. Describes the specific problem that the model solves, such as text-classification (text categorization).
   * 
   * @example
   * text-classifiaction
   */
  task?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1557702098******
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': Label },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

