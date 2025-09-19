// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateRegistryTypeResponseBodyRegistryTypeInfos extends $dara.Model {
  /**
   * @remarks
   * The number of image repositories.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The name of the image repository type. Valid values:
   * 
   * *   **acr**: Container Registry
   * *   **harbor**: Harbor
   * *   **quay**: Quay
   * *   **CI/CD**: Jenkins
   * 
   * @example
   * harbor
   */
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      registryType: 'RegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class ListPrivateRegistryTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of image repository types.
   */
  registryTypeInfos?: ListPrivateRegistryTypeResponseBodyRegistryTypeInfos[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registryTypeInfos: 'RegistryTypeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryTypeInfos: { 'type': 'array', 'itemType': ListPrivateRegistryTypeResponseBodyRegistryTypeInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registryTypeInfos)) {
      $dara.Model.validateArray(this.registryTypeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

