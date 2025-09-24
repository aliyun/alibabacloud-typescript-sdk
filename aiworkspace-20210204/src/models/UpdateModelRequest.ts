// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the model in the workspace. Valid values:
   * 
   * *   PRIVATE: The model is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The model is visible to all users in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. This parameter describes the domain in which the model is applied. Valid values: nlp (natural language processing) and cv (computer vision).
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
   */
  extraInfo?: { [key: string]: any };
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
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The model name, which must be 1 to 127 characters in length.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type. Valid values: Checkpoint and LoRA.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model. This parameter can be used for custom sorting.
   * 
   * @example
   * 0
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. This parameter describes the community or organization to which the source model belongs. Valid values: ModelScope and HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  parameterSize?: number;
  /**
   * @remarks
   * The task. This parameter specifies the specific issue that the model resolves. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      parameterSize: 'ParameterSize',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      parameterSize: 'number',
      task: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

