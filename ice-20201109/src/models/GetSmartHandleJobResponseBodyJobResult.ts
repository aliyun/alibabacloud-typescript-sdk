// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartHandleJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * The AI analysis result.
   * 
   * @example
   * Intelligent segmentation or tagging information
   */
  aiResult?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  mediaUrl?: string;
  /**
   * @remarks
   * The token usage. This parameter is returned only for keyword-based text generation jobs.
   * 
   * @example
   * {"total_tokens":100}
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      aiResult: 'AiResult',
      mediaId: 'MediaId',
      mediaUrl: 'MediaUrl',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiResult: 'string',
      mediaId: 'string',
      mediaUrl: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

