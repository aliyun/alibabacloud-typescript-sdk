// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVerifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions in JSON string format. The following fields are included:
   * - **DownloadMode (String)**: the download mode.
   *   - Example: sync
   * - **InvokeType (String)**: the product plan, which corresponds to **ProductType**.
   * - **SceneIdList (List<Long>)**: the list of scene IDs.
   * - **StatisticsType (String)**: the statistics type. Valid values:
   *   - day
   *   - month
   * - **StartDate (String)**: the query start time.
   *   - Example: 2025-09-17 00:00:00 +0800
   * - **EndDate (String)**: the query end time.
   *   - Example: 2025-10-16 23:59:59 +0800
   * - **ProductProgramList**: the list of product codes under the product plan to query.
   *   - Example: ["FINANCE_FACE_VERIFY","MFVC"]
   * - **Code (information verification API)**: Valid values:
   *   - **ID_CARD_2_META**: ID card two-factor verification
   *   - **ID_PERIOD**: ID card validity period verification
   *   - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   *   - **MOBILE_ONLINE_STATUS**: mobile number online status
   *   - **MOBILE_3_META_SIMPLE**: mobile number three-factor verification (basic)
   *   - **MOBILE_3_META**: mobile number three-factor verification (detailed)
   *   - **MOBILE_2_META**: mobile number two-factor verification
   *   - **BANK_CARD_N_META**: bank card verification (detailed)
   *   - **MOBILE_DETECT**: phone number detection 
   *   - **VEHICLE_N_META**: vehicle element verification (enhanced)
   *   - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   *   - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   *   - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   *   - **VEHICLE_CHECK**: vehicle element verification
   * - **ProductCode (information verification)**: same as Code.
   * 
   * @example
   * {"ProductType":"INVOKE_STATISTICS","BizParam":{"DownloadMode":"sync","InvokeType":"FINANCE_VERIFY","SceneIdList":"[]","ProductProgramList":"[\\"FINANCE_FACE_VERIFY\\",\\"MFVC\\",\\"PV_FV\\",\\"CLOUD_FACE_CAPTURE\\",\\"FACE_GUARD\\",\\"PV_FC\\"]","StatisticsType":"day","StartDate":"2025-09-17 00:00:00 +0800","EndDate":"2025-10-16 23:59:59 +0800"}}
   */
  bizParam?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - **FINANCE_VERIFY**: financial-grade ID Verification
   * - **SMART_VERIFY**: enhanced ID Verification (discontinued)
   * - **FACE_VERIFY**: ID Verification (discontinued)
   * - **INFO_CHECK_STATISTICS**: information verification.
   * 
   * @example
   * FINANCE_VERIFY
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizParam: 'BizParam',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizParam: 'string',
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

