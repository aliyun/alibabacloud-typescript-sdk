// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIcpFilingInfoForPartnerResponseBodyData extends $dara.Model {
  icpNumber?: string;
  recorded?: boolean;
  siteRecordNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
      recorded: 'Recorded',
      siteRecordNumber: 'SiteRecordNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
      recorded: 'boolean',
      siteRecordNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIcpFilingInfoForPartnerResponseBody extends $dara.Model {
  data?: GetIcpFilingInfoForPartnerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetIcpFilingInfoForPartnerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

