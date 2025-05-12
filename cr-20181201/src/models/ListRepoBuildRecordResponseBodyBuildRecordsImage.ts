// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRecordResponseBodyBuildRecordsImage extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

