// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchTranslateForHtmlShrinkRequest extends $dara.Model {
  appName?: string;
  extShrink?: string;
  format?: string;
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  textShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      extShrink: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      textShrink: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      extShrink: 'string',
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      textShrink: 'string',
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

