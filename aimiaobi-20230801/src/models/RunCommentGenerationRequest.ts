// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommentGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * Set to true to allow emoji in comments. Default is false.
   * 
   * @example
   * true
   */
  allowEmoji?: boolean;
  /**
   * @remarks
   * Additional instructions.
   * 
   * @example
   * 不要输出额外其他信息
   */
  extraInfo?: string;
  /**
   * @remarks
   * Length of each comment in characters.
   * 
   * @example
   * 20
   */
  length?: string;
  /**
   * @remarks
   * Length distribution.
   * 
   * Valid keys:
   * 
   * - short (up to 20 characters)
   * 
   * - medium (20–50 characters)
   * 
   * - long (50–100 characters)
   * 
   * This parameter is required.
   * 
   * @example
   * {"short":"50","long":“50”}
   */
  lengthRange?: { [key: string]: any };
  /**
   * @remarks
   * ID of the model to use.
   * 
   * @example
   * quanmiao-max、quanmiao-plus
   */
  modelId?: string;
  /**
   * @remarks
   * Number of comments to generate.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  numComments?: string;
  /**
   * @remarks
   * Sentiment distribution.
   * 
   * Valid keys:
   * 
   * - positive
   * 
   * - neutral
   * 
   * - negative
   * 
   * This parameter is required.
   * 
   * @example
   * {"positive":"50","negative":"50"}
   */
  sentiment?: { [key: string]: any };
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * Article to comment on.
   * 
   * This parameter is required.
   * 
   * @example
   * ps5是sony新一代的游戏机，他创新性的...
   */
  sourceMaterial?: string;
  /**
   * @remarks
   * Tone of the comments.
   * 
   * @example
   * 积极正面
   */
  style?: string;
  /**
   * @remarks
   * Comment type.
   * 
   * Valid keys:
   * 
   * - emotion (expresses emotion)
   * 
   * - opinion (states an opinion)
   * 
   * - interaction (encourages interaction)
   * 
   * - experience (shares experience)
   * 
   * - humor (uses humor)
   * 
   * This parameter is required.
   * 
   * @example
   * {"emotion":"50","opinion":"50"}
   */
  type?: { [key: string]: any };
  /**
   * @remarks
   * Path parameter. The unique identifier of your Alibaba Cloud Model Studio workspace. To get this ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-3kcs1w3lltrtbfkr
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowEmoji: 'AllowEmoji',
      extraInfo: 'ExtraInfo',
      length: 'Length',
      lengthRange: 'LengthRange',
      modelId: 'ModelId',
      numComments: 'NumComments',
      sentiment: 'Sentiment',
      sessionId: 'SessionId',
      sourceMaterial: 'SourceMaterial',
      style: 'Style',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowEmoji: 'boolean',
      extraInfo: 'string',
      length: 'string',
      lengthRange: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelId: 'string',
      numComments: 'string',
      sentiment: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sessionId: 'string',
      sourceMaterial: 'string',
      style: 'string',
      type: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.lengthRange) {
      $dara.Model.validateMap(this.lengthRange);
    }
    if(this.sentiment) {
      $dara.Model.validateMap(this.sentiment);
    }
    if(this.type) {
      $dara.Model.validateMap(this.type);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

