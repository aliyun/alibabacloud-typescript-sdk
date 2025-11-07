// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGitRepositoryResponseBodyGitRepo extends $dara.Model {
  /**
   * @example
   * Test parameter for security testing
   */
  description?: string;
  /**
   * @example
   * aliyun-computest/lingo
   */
  fullName?: string;
  /**
   * @example
   * https://github.com/alibaba/fastjson
   */
  htmlUrl?: string;
  /**
   * @example
   * False
   */
  isPrivate?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fullName: 'FullName',
      htmlUrl: 'HtmlUrl',
      isPrivate: 'IsPrivate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fullName: 'string',
      htmlUrl: 'string',
      isPrivate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGitRepositoryResponseBody extends $dara.Model {
  gitRepo?: CreateGitRepositoryResponseBodyGitRepo;
  /**
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gitRepo: 'GitRepo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gitRepo: CreateGitRepositoryResponseBodyGitRepo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.gitRepo && typeof (this.gitRepo as any).validate === 'function') {
      (this.gitRepo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

