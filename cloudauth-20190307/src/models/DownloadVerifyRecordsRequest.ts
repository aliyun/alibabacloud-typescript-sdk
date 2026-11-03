// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVerifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions in JSON string format. This parameter includes the following fields:
   * - **DownloadMode** (String): The download mode.
   *   - Example value: sync
   * - **InvokeType** (String): The product solution, which corresponds to **ProductType**.
   * - **SceneIdList** (List<Long>): The list of scene IDs.
   * - **StatisticsType** (String): The statistics type.
   *   - day
   *   - month
   * - **StartDate** (String): The start time of the query.
   *   - Example value: 2025-09-17 00:00:00 +0800
   * - **EndDate** (String): The end time of the query.
   *   - Example value: 2025-10-16 23:59:59 +0800
   * - **ProductProgramList**: The list of product codes corresponding to the product solution to be queried.
   *   - Example value: ["FINANCE_FACE_VERIFY","MFVC"]
   * - **Code** (Information verification API):
   *   - **ID_CARD_2_META**: Two-element verification for ID cards
   *   - **ID_PERIOD**: ID card validity period verification
   *   - **MOBILE_ONLINE_LENGTH**: Mobile phone in-network duration
   *   - **MOBILE_ONLINE_STATUS**: Mobile phone in-network status
   *   - **MOBILE_3_META_SIMPLE**: Simplified three-element verification for mobile phone numbers
   *   - **MOBILE_3_META**: Detailed three-element verification for mobile phone numbers
   *   - **MOBILE_2_META**: Two-element verification for mobile phone numbers
   *   - **BANK_CARD_N_META**: Detailed bank card verification
   *   - **MOBILE_DETECT**: Phone number detection 
   *   - **VEHICLE_N_META**: Enhanced vehicle element verification
   *   - **VEHICLE_PENTA_INFO**: Five-item vehicle information recognition
   *   - **VEHICLE_LICENSE_INFO**: Vehicle information recognition
   *   - **VEHICLE_INSURE_DATE**: Vehicle insurance date query
   *   - **VEHICLE_CHECK**: Vehicle element verification
   * - **ProductCode** (Information verification): Same as Code.
   * 
   * @example
   * {"ProductType":"INVOKE_STATISTICS","BizParam":{"DownloadMode":"sync","InvokeType":"FINANCE_VERIFY","SceneIdList":"[]","ProductProgramList":"[\\"FINANCE_FACE_VERIFY\\",\\"MFVC\\",\\"PV_FV\\",\\"CLOUD_FACE_CAPTURE\\",\\"FACE_GUARD\\",\\"PV_FC\\"]","StatisticsType":"day","StartDate":"2025-09-17 00:00:00 +0800","EndDate":"2025-10-16 23:59:59 +0800"}}
   */
  bizParam?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - **FINANCE_VERIFY**: Financial-grade ID Verification
   * - **SMART_VERIFY**: Enhanced ID Verification (discontinued)
   * - **FACE_VERIFY**: ID Verification (discontinued)
   * - **INFO_CHECK_STATISTICS**: Information verification
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

