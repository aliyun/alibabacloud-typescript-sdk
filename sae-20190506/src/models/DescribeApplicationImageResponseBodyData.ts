// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved.
   */
  crUrl?: string;
  /**
   * @remarks
   * This parameter is reserved.
   */
  logo?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * demo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
   * 
   * @example
   * demo
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the repository. Only Container Registry is supported.
   * 
   * @example
   * ALI_HUB
   */
  repoOriginType?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * latest
   */
  repoTag?: string;
  /**
   * @remarks
   * This parameter is reserved.
   */
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      crUrl: 'CrUrl',
      logo: 'Logo',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      repoTag: 'RepoTag',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crUrl: 'string',
      logo: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      repoTag: 'string',
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

