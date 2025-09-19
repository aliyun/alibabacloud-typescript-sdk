// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateRegistryListRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the image repository. Valid values:
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
      registryType: 'RegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

