// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJenkinsImageScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The image summary.
   * 
   * @example
   * a8c9f3765684cd8d9053db9523eab58878e99a199217500efd9ae2a860a7****
   */
  digest?: string;
  /**
   * @remarks
   * The image creation time.
   * 
   * @example
   * 1717430400000
   */
  imageCreate?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * b10ef7b245c34a0822055c74fc4a0e8b5baf0279306316b2c517a501ed25****
   */
  imageId?: string;
  /**
   * @remarks
   * The image size. Unit: bytes.
   * 
   * @example
   * 6120340
   */
  imageSize?: number;
  /**
   * @remarks
   * The image update time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1717430498600
   */
  imageUpdate?: number;
  /**
   * @remarks
   * The Jenkins environment context. Leave this parameter empty or set it to the fixed value: **release**.
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
   * The repository name.
   * 
   * @example
   * sdk
   */
  repoName?: string;
  /**
   * @remarks
   * The access source IP address.
   * 
   * @example
   * 119.136.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The image label.
   * 
   * @example
   * 00f597223f-20210831-1
   */
  tag?: string;
  /**
   * @remarks
   * The access token for the Jenkins image repository. Obtain the token from the homepage of the Chinese documentation center > Security Center > User Guide > Container Protection > CI/CD Access Settings. You can also invoke CreateJenkinsImageRegistry to create a CI/CD image repository and obtain the token from the response parameter Data.Token. For an existing repository, invoke PageImageRegistry to query the token.
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

