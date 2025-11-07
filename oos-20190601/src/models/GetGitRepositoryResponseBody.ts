// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGitRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * FASTJSON 2.0.x has been released, faster and more secure, recommend you upgrade.
   */
  description?: string;
  /**
   * @example
   * https://github.com/alibaba/fastjson
   */
  htmlUrl?: string;
  /**
   * @example
   * False
   */
  isPrivate?: boolean;
  /**
   * @example
   * 13B71887-D215-53B5-8818-4D3190604B26
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      htmlUrl: 'HtmlUrl',
      isPrivate: 'IsPrivate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      htmlUrl: 'string',
      isPrivate: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

