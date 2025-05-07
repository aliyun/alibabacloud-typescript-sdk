// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSlbRequest extends $dara.Model {
  /**
   * @remarks
   * 0099b7be-5f5b-4512-a7fc-56049ef1\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * [{"port":80,"targetPort":8080,"protocol":"TCP"}]
   * 
   * @example
   * [{"port":80,"targetPort":8080,"protocol":"TCP"}]
   */
  internet?: string;
  internetSlbChargeType?: string;
  /**
   * @remarks
   * lb-bp1tg0k6d9nqaw7l1\\*\\*\\*\\*
   * 
   * @example
   * lb-bp1tg0k6d9nqaw7l1****
   */
  internetSlbId?: string;
  /**
   * @remarks
   * [{"port":80,"targetPort":8080,"protocol":"TCP"}]
   * 
   * @example
   * [{"port":80,"targetPort":8080,"protocol":"TCP"}]
   */
  intranet?: string;
  intranetSlbChargeType?: string;
  /**
   * @remarks
   * lb-bp1tg0k6d9nqaw7l1\\*\\*\\*\\*
   * 
   * @example
   * lb-bp1tg0k6d9nqaw7l1****
   */
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      internetSlbChargeType: 'InternetSlbChargeType',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetSlbChargeType: 'IntranetSlbChargeType',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'string',
      internetSlbChargeType: 'string',
      internetSlbId: 'string',
      intranet: 'string',
      intranetSlbChargeType: 'string',
      intranetSlbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

