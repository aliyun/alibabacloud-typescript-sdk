// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDockerhubImageResponseBodyImageList extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 5ffded22661b0f1e9c7fcccb0d488cff*****f8c52a819bd7179ef3e4a041988
   */
  digest?: string;
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 0
   */
  hcCount?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * d943de1933650d74b415d3ae8b37c064a0e0c700574d7a949c26db3291******
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image. Unit: bytes.
   * 
   * @example
   * 1024
   */
  imageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * python
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * python
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The risk details of the image.
   * 
   * @example
   * {"vul":0}
   */
  riskLevelDetail?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * 3.9
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * a9b50827-801f-414c-900d-c4a223d*****
   */
  uuid?: string;
  /**
   * @remarks
   * The number of detected vulnerabilities.
   * 
   * @example
   * 0
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      hcCount: 'HcCount',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      riskLevelDetail: 'RiskLevelDetail',
      tag: 'Tag',
      uuid: 'Uuid',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      hcCount: 'number',
      imageId: 'string',
      imageSize: 'number',
      repoName: 'string',
      repoNamespace: 'string',
      riskLevelDetail: 'string',
      tag: 'string',
      uuid: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDockerhubImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  imageList?: ListDockerhubImageResponseBodyImageList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageList: 'ImageList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageList: { 'type': 'array', 'itemType': ListDockerhubImageResponseBodyImageList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

