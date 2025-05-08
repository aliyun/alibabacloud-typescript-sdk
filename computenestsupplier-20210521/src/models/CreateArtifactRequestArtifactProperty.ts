// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactRequestArtifactProperty extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity version of the service in Alibaba Cloud Marketplace.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * V1.0
   */
  commodityVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * m-0xij191j9cuev6xxxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  This parameter is available only if the deployment package is an image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * crr-d8o1nponyc2t1gcg
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `Public`: a public repository.
   * *   `Private`: a private repository.
   * 
   * You can specify the RepoType or Summary parameter. The RepoType parameter is optional.
   * 
   * @example
   * Public
   */
  repoType?: string;
  /**
   * @remarks
   * The version tag of the image repository.
   * 
   * >  This parameter is available only if the deployment package is a container image or of the Helm chart type.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The object URL of the deployment package.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com/1309208528xxxxxx/template/2e1ce8fc-xxxx-481c-9e8e-789ba9db487d.json
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityVersion: 'CommodityVersion',
      imageId: 'ImageId',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
      tag: 'Tag',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityVersion: 'string',
      imageId: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
      tag: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

