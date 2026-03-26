// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class Model extends $dara.Model {
  /**
   * @remarks
   * The workspace accessibility. Valid values:
   * 
   * *   PRIVATE (default): The model is accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The model is accessible to all members of the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain where the model is applied, such as nlp (Natural Language Processing) and cv (Computer Vision).
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
   * The time when the model was created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtLatestVersionModifiedTime?: string;
  /**
   * @remarks
   * The time when the model was last modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The labels.
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
   * model-1123*****
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type, such as checkpoint and LoRA.
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
   * 101
   */
  orderNumber?: number;
  /**
   * @remarks
   * The community or organization to which the source model belongs, such as ModelScope or Hugging Face.
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
   * 1557702098******
   */
  ownerId?: string;
  /**
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
  tags?: Label[];
  /**
   * @remarks
   * The task. The specific issue that the model resolves, such as text-classification.
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

