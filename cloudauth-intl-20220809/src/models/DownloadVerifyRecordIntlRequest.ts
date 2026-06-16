// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVerifyRecordIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * - INVOKE_STATISTICS
   * - INVOKE_RECORD.
   * 
   * @example
   * INVOKE_RECORD
   */
  bizType?: string;
  /**
   * @remarks
   * The query code.
   * 
   * @example
   * vrf_intl_verify_record_real_id_idv_invoke_statistics_query
   */
  code?: string;
  /**
   * @remarks
   * The download mode. Valid values:
   * 
   * - **async**: asynchronous
   * - **sync**: synchronous.
   * 
   * @example
   * async
   */
  downloadMode?: string;
  /**
   * @remarks
   * The parameters for the export and download query task.
   * 
   * @example
   * {\\"productCode\\":\\"FACE_LIVENESS\\",\\"startDs\\":\\"20251121\\",\\"endDs\\":\\"20251128\\",\\"language\\":\\"en\\"}
   */
  param?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * KYC
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      code: 'Code',
      downloadMode: 'DownloadMode',
      param: 'Param',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      code: 'string',
      downloadMode: 'string',
      param: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

