// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckGitRepositoryExistsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  repoExists?: boolean;
  /**
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      repoExists: 'RepoExists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoExists: 'boolean',
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

