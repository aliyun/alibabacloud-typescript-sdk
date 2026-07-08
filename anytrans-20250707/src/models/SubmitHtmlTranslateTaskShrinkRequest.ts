// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHtmlTranslateTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation behavior.
   */
  extShrink?: string;
  /**
   * @remarks
   * The format of the input text.
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * The translation model.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * The source language.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The HTML content to be translated.
   * 
   * @example
   * <!DOCTYPE html>
   * <html lang="zh-CN">
   * <head>
   *     <meta charset="UTF-8">
   *     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   *     <title>我的第一个网页</title>
   * </head>
   * <body>
   *     <h1>欢迎来到我的网页！</h1>
   *     <p>这是一个简单的 HTML 页面。</p>
   *     <p>学习 HTML 是进入网页开发的第一步。</p>
   *     <a href="https://www.example.com">点击这里访问示例网站</a>
   * </body>
   * </html>
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace used for this request.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      extShrink: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      text: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extShrink: 'string',
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      text: 'string',
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

