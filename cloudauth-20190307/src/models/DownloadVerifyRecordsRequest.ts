// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVerifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Query condition in JSON string format, specifically including fields:
   * - **DownloadMode (String)**: Download mode,
   *   - Example value: sync
   * - **InvokeType (String)**: Product plan, corresponding to **ProductType**
   * - **SceneIdList (List<Long>)**: List of scene IDs
   * - **StatisticsType (String)**: Statistics type
   *   - day
   *   - month
   * - **StartDate (String)**: Start date of the query
   *   - Example value: 2025-09-17 00:00:00 +0800
   * - **EndDate (String)**: End date of the query
   *   - Example value: 2025-10-16 23:59:59 +0800
   * - **ProductProgramList**: List of product codes under the queried product plan
   *   - Example value: ["FINANCE_FACE_VERIFY","MFVC"]
   * - **Code (Information Verification API)**:
   *   - **ID_CARD_2_META**: ID card two-factor verification
   *   - **ID_PERIOD**: Validity period of ID card verification
   *   - **MOBILE_ONLINE_LENGTH**: Mobile online duration
   *   - **MOBILE_ONLINE_STATUS**: Mobile online status
   *   - **MOBILE_3_META_SIMPLE**: Simplified mobile three-factor verification
   *   - **MOBILE_3_META**: Detailed mobile three-factor verification
   *   - **MOBILE_2_META**: Mobile two-factor verification
   *   - **BANK_CARD_N_META**: Detailed bank card verification
   *   - **MOBILE_DETECT**: Number detection 
   *   - **VEHICLE_N_META**: Enhanced vehicle factor verification
   *   - **VEHICLE_PENTA_INFO**: Vehicle five-item information recognition
   *   - **VEHICLE_LICENSE_INFO**: Vehicle information recognition
   *   - **VEHICLE_INSURE_DATE**: Vehicle insurance date inquiry
   *   - **VEHICLE_CHECK**: Vehicle factor verification
   * - **ProductCode** (Information Verification): Same as Code
   * 
   * @example
   * {"ProductType":"INVOKE_STATISTICS","BizParam":{"DownloadMode":"sync","InvokeType":"FINANCE_VERIFY","SceneIdList":"[]","ProductProgramList":"[\\"FINANCE_FACE_VERIFY\\",\\"MFVC\\",\\"PV_FV\\",\\"CLOUD_FACE_CAPTURE\\",\\"FACE_GUARD\\",\\"PV_FC\\"]","StatisticsType":"day","StartDate":"2025-09-17 00:00:00 +0800","EndDate":"2025-10-16 23:59:59 +0800"}}
   */
  bizParam?: string;
  /**
   * @remarks
   * Product type:
   * - **FINANCE_VERIFY**: Financial-level real-person authentication
   * - **SMART_VERIFY**: Enhanced real-person authentication (discontinued)
   * - **FACE_VERIFY**: Real-person authentication (discontinued)
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

