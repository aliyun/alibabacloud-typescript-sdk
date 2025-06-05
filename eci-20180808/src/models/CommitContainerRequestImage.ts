// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitContainerRequestImage extends $dara.Model {
  /**
   * @remarks
   * The authorization of the image.
   * 
   * @example
   * ECI
   */
  author?: string;
  /**
   * @remarks
   * The message about the image.
   * 
   * @example
   * test commit
   */
  message?: string;
  /**
   * @remarks
   * The image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eastest/registry-test
   */
  repository?: string;
  /**
   * @remarks
   * The tag of the image. This parameter is empty by default, which indicates that the tag is not modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.6
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      message: 'Message',
      repository: 'Repository',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      message: 'string',
      repository: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

