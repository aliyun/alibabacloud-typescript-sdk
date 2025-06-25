// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommentGenerationRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowEmoji?: boolean;
  extraInfo?: string;
  /**
   * @example
   * 20
   */
  length?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"short":"50","long":“50”}
   */
  lengthRange?: { [key: string]: any };
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  numComments?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"positive":"50","negative":"50"}
   */
  sentiment?: { [key: string]: any };
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceMaterial?: string;
  style?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"emotion":"50","opinion":"50"}
   */
  type?: { [key: string]: any };
  /**
   * @remarks
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

