// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebhookCodeContext extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * b1dd9ba168dfef1cb3a1dd608b6054c771a93959
   */
  commitID?: string;
  /**
   * @example
   * my PR decscription
   */
  description?: string;
  /**
   * @example
   * PUSH
   */
  eventType?: string;
  /**
   * @example
   * commit message
   */
  message?: string;
  /**
   * @example
   * merged
   */
  prType?: string;
  /**
   * @example
   * https://codeup.aliyun.com/my-namespace/my-repo.git
   */
  repoUrl?: string;
  /**
   * @example
   * master
   */
  sourceBranch?: string;
  /**
   * @example
   * release-0.0.1
   */
  tag?: string;
  /**
   * @example
   * master
   */
  targetBranch?: string;
  /**
   * @example
   * # FIX
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      description: 'description',
      eventType: 'eventType',
      message: 'message',
      prType: 'prType',
      repoUrl: 'repoUrl',
      sourceBranch: 'sourceBranch',
      tag: 'tag',
      targetBranch: 'targetBranch',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      description: 'string',
      eventType: 'string',
      message: 'string',
      prType: 'string',
      repoUrl: 'string',
      sourceBranch: 'string',
      tag: 'string',
      targetBranch: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

