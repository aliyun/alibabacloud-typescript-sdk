// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRegistryExtraResponseBodyImageRegistryExtraInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 176618589410****
   */
  aliUid?: number;
  /**
   * @remarks
   * The authorization token.
   * 
   * @example
   * 64ad8ddf-6a4c-46b5-8dea-b105a06bd534
   */
  authToken?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 113441
   */
  id?: number;
  /**
   * @remarks
   * The namespace of the image.
   * 
   * @example
   * public-goods
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * 25363
   */
  registryId?: number;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **acr**: Container Registry.
   * *   **harbor**: Harbor.
   * *   **quay**: Quay.
   * *   **CI/CD**: Jenkins.
   * 
   * @example
   * harbor
   */
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      authToken: 'AuthToken',
      id: 'Id',
      namespace: 'Namespace',
      registryId: 'RegistryId',
      registryType: 'RegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      authToken: 'string',
      id: 'number',
      namespace: 'string',
      registryId: 'number',
      registryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageRegistryExtraResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional configuration information about the image repository.
   */
  imageRegistryExtraInfos?: ListImageRegistryExtraResponseBodyImageRegistryExtraInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageRegistryExtraInfos: 'ImageRegistryExtraInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRegistryExtraInfos: { 'type': 'array', 'itemType': ListImageRegistryExtraResponseBodyImageRegistryExtraInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRegistryExtraInfos)) {
      $dara.Model.validateArray(this.imageRegistryExtraInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

