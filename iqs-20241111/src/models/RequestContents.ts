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
   * Specifies whether to return markdown. Default value: false.
   */
  markdownText?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Rerank and return the RerankScore. Default value: true.
   */
  rerankScore?: boolean;
  richMainBody?: boolean;
  /**
   * @remarks
   * Specifies whether to return an enhanced summary. Default value: false. The summary feature is billed separately.
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

