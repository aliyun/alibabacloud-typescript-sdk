// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreIdcProbeScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The action to perform. Valid values:
   * - **1**: whitelist
   * - **2**: ignore.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ignoreAction?: number;
  /**
   * @remarks
   * The IDs of scan results. Separate multiple IDs with commas (,).
   * 
   * > Call the [DescribeIdcProbeScanResultList](~~DescribeIdcProbeScanResultList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 332098932,332098964,332098963
   */
  scanResultIds?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreAction: 'IgnoreAction',
      scanResultIds: 'ScanResultIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreAction: 'number',
      scanResultIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

