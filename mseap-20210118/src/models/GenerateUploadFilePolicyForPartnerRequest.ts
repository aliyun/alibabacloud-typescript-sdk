// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadFilePolicyForPartnerRequest extends $dara.Model {
  /**
   * @example
   * esp.website
   */
  bizType?: string;
  /**
   * @example
   * 2024/06/25/website_partner_third_party_leads_02.csv
   */
  fileName?: string;
  /**
   * @example
   * website_partner_third_party_leads
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      fileName: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

