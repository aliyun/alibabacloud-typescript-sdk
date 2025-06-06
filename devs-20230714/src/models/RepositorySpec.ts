// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepositorySpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://github.com/DDofDD/start-springboot-lfgy.git
   */
  cloneUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * awesome-connection
   */
  connectionName?: string;
  /**
   * @example
   * my-repo-name
   */
  displayName?: string;
  /**
   * @example
   * 312649
   */
  id?: number;
  /**
   * @example
   * my-org-name
   */
  owner?: string;
  /**
   * @example
   * github
   */
  platform?: string;
  /**
   * @example
   * https://github.com/my-org-name/my-repo-name
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cloneUrl: 'cloneUrl',
      connectionName: 'connectionName',
      displayName: 'displayName',
      id: 'id',
      owner: 'owner',
      platform: 'platform',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneUrl: 'string',
      connectionName: 'string',
      displayName: 'string',
      id: 'number',
      owner: 'string',
      platform: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

