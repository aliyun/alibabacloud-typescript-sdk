// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to include additional information (securityProperties, superAdmins).
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Whether to include additional information (productType).
   * 
   * @example
   * true
   */
  withQuotaProductType?: boolean;
  /**
   * @remarks
   * Whether to include additional information (properties.storageTierInfo).
   * 
   * @example
   * true
   */
  withStorageTierInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'verbose',
      withQuotaProductType: 'withQuotaProductType',
      withStorageTierInfo: 'withStorageTierInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
      withQuotaProductType: 'boolean',
      withStorageTierInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

