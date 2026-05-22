// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppImageSecretsResponseBodyImageSecretList extends $dara.Model {
  /**
   * @remarks
   * Name of the image secret.
   * 
   * @example
   * reg-123****
   */
  name?: string;
  /**
   * @remarks
   * Registry address.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * Username for the image repository
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      registry: 'Registry',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      registry: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppImageSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of image secrets.
   */
  imageSecretList?: ListEdgeContainerAppImageSecretsResponseBodyImageSecretList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3558df77-8a7a-4060-a900-2d7949403836
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageSecretList: 'ImageSecretList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSecretList: { 'type': 'array', 'itemType': ListEdgeContainerAppImageSecretsResponseBodyImageSecretList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageSecretList)) {
      $dara.Model.validateArray(this.imageSecretList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

