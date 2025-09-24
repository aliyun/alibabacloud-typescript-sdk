// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the model in the workspace. Valid values:
   * 
   * *   PRIVATE (default): Visible only to you and the administrator of the workspace.
   * *   PUBLIC: Vvisible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain of the model. Describes the domain in which the model is for. Example: nlp (natural language processing), cv (computer vision), and others.
   * 
   * @example
   * nlp
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
   * 
   * **if can be null:**
   * true
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The tags. This parameter will be deprecated and replaced by Tag.
   */
  labels?: Label[];
  /**
   * @remarks
   * The model description, used to distinguish different models.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The documentation of the model.
   * 
   * @example
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The name of the model. The name must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type. Example: Checkpoint or LoRA.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model. Can be used for custom sorting.
   * 
   * @example
   * 0
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. The community or organization to which the source model belongs, such as ModelScope or HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  parameterSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: Label[];
  /**
   * @remarks
   * The task of the model. Describes the specific problem that the model solves. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. Call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      labels: 'Labels',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      parameterSize: 'ParameterSize',
      tag: 'Tag',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      parameterSize: 'number',
      tag: { 'type': 'array', 'itemType': Label },
      task: 'string',
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

