// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestContents extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the main text. Default value: false.
   */
  mainText?: boolean;
  /**
   * @remarks
   * Specifies whether to return Markdown. Default value: false.
   */
  markdownText?: boolean;
  /**
   * @remarks
   * Specifies whether to enable reranking and return the rerank score. Default value: true.
   */
  rerankScore?: boolean;
  /**
   * @remarks
   * Specifies whether to return the full rich text content.
   */
  richMainBody?: boolean;
  /**
   * @remarks
   * Specifies whether to return the enhanced summary. Default value: false. The summary feature is billed separately.
   */
  summary?: boolean;
  static names(): { [key: string]: string } {
    return {
      mainText: 'mainText',
      markdownText: 'markdownText',
      rerankScore: 'rerankScore',
      richMainBody: 'richMainBody',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainText: 'boolean',
      markdownText: 'boolean',
      rerankScore: 'boolean',
      richMainBody: 'boolean',
      summary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

