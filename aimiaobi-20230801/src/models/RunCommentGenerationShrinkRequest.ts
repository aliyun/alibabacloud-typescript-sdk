// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommentGenerationShrinkRequest extends $dara.Model {
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
  lengthRangeShrink?: string;
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
  sentimentShrink?: string;
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
  typeShrink?: string;
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
      lengthRangeShrink: 'LengthRange',
      numComments: 'NumComments',
      sentimentShrink: 'Sentiment',
      sessionId: 'SessionId',
      sourceMaterial: 'SourceMaterial',
      style: 'Style',
      typeShrink: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowEmoji: 'boolean',
      extraInfo: 'string',
      length: 'string',
      lengthRangeShrink: 'string',
      numComments: 'string',
      sentimentShrink: 'string',
      sessionId: 'string',
      sourceMaterial: 'string',
      style: 'string',
      typeShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

