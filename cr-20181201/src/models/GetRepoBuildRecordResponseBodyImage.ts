// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoBuildRecordResponseBodyImage extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
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

