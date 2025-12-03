// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommitStatusRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * default
   */
  context?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @example
   * xxx
   */
  targetUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2080972
   */
  repositoryIdentity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c1a1299a2656bfc155650bbd2df5e628fa1f4c
   */
  sha?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      context: 'context',
      description: 'description',
      state: 'state',
      targetUrl: 'targetUrl',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
      sha: 'sha',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      context: 'string',
      description: 'string',
      state: 'string',
      targetUrl: 'string',
      organizationId: 'string',
      repositoryIdentity: 'string',
      sha: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

