// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include additional information, such as securityProperties and superAdmins.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Specifies whether to include additional information, such as productType.
   * 
   * @example
   * true
   */
  withQuotaProductType?: boolean;
  /**
   * @remarks
   * Specifies whether to include additional information, such as properties.storageTierInfo.
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

