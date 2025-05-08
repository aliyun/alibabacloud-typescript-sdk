// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcrImageRepositoriesResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The namespace of the repository
   * 
   * @example
   * computenest
   */
  namespace?: string;
  /**
   * @remarks
   * The image repo ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  /**
   * @remarks
   * The image repo name.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `Private`: a private repository
   * *   `Public`: a public repository
   * 
   * @example
   * Private
   */
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      namespace: 'Namespace',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      namespace: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

