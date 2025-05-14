// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesInstanceSnapshotList extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the snapshot was modified.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * py36_cpu_tf1.12_ubuntu
   */
  imageName?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @remarks
   * The error code of the instance snapshot.
   * 
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message of the instance snapshot.
   * 
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The URL of the image repository.
   * 
   * @example
   * https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images
   */
  repositoryUrl?: string;
  /**
   * @remarks
   * The status of the instance snapshot.
   * 
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      repositoryUrl: 'RepositoryUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      repositoryUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

