// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJenkinsImageScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * a8c9f3765684cd8d9053db9523eab58878e99a199217500efd9ae2a860a7e01e
   */
  digest?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1717430400000
   */
  imageCreate?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * b10ef7b245c34a0822055c74fc4a0e8b5baf0279306316b2c517a501ed250b1e
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image. Unit: bytes.
   * 
   * @example
   * 6120340
   */
  imageSize?: number;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 1717430498600
   */
  imageUpdate?: number;
  /**
   * @remarks
   * The information about the Jenkins environment.
   * 
   * @example
   * release
   */
  jenkinsEnv?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * lkl-zf-ss-ccss
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * sdk
   */
  repoName?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 119.136.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * 00f597223f-20210831-1
   */
  tag?: string;
  /**
   * @remarks
   * The token that is used to access the Jenkins image repository.
   * 
   * @example
   * c3de8326-273e-11fc-a0e3-d012435c****
   */
  token?: string;
  /**
   * @remarks
   * The UUID of the image asset.
   * 
   * @example
   * 5b268326-273e-44fc-a0e3-9482435c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      jenkinsEnv: 'JenkinsEnv',
      namespace: 'Namespace',
      repoName: 'RepoName',
      sourceIp: 'SourceIp',
      tag: 'Tag',
      token: 'Token',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      jenkinsEnv: 'string',
      namespace: 'string',
      repoName: 'string',
      sourceIp: 'string',
      tag: 'string',
      token: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

