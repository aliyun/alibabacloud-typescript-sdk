// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the model in the workspace. Valid values:
   * 
   * - PRIVATE (default): The model is visible only to you and administrators in the workspace.
   * 
   * - PUBLIC: The model is visible to everyone in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. This describes the field that the model is designed for, such as nlp (Natural Language Processing) or cv (computer vision).
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
   * A list of labels. This parameter is deprecated and is replaced by the Tag parameter.
   */
  labels?: Label[];
  /**
   * @remarks
   * The description of the model. Use this to distinguish different models.
   * 
   * @example
   * News classification.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The model documentation.
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
   * 
   * @example
   * News classification
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
   * The ordinal number of the model. You can use this for custom sorting.
   * 
   * @example
   * 0
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. This specifies the community or organization that the source model belongs to, such as ModelScope and HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The number of parameters, in millions.
   * 
   * @example
   * 3000
   */
  parameterSize?: number;
  /**
   * @remarks
   * A list of tags.
   */
  tag?: Label[];
  /**
   * @remarks
   * The task. This describes the specific problem that the model solves, such as text-classification (text classification).
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The ID of the workspace. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

