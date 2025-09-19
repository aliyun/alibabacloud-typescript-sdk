// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreIdcProbeScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Valid values:
   * 
   * *   **1**: adds the scan result to the whitelist.
   * *   **2**: ignores the scan result.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ignoreAction?: number;
  /**
   * @remarks
   * The ID of the scan result. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeIdcProbeScanResultList](~~DescribeIdcProbeScanResultList~~) operation to query the ID.
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

