// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfiguration } from "./VodPackagingConfiguration";


export class CreateVodPackagingConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The packaging configuration.
   */
  packagingConfiguration?: VodPackagingConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packagingConfiguration: 'PackagingConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packagingConfiguration: VodPackagingConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.packagingConfiguration && typeof (this.packagingConfiguration as any).validate === 'function') {
      (this.packagingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

