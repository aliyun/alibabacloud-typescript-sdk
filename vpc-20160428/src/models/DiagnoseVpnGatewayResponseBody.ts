// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseVpnGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * After a diagnostic ID is returned, you can call [GetVpnGatewayDiagnoseResult](https://help.aliyun.com/document_detail/2521963.html) to query the diagnostic report.
   * 
   * @example
   * vpndgn-uf6kuxbe3iv028k3s****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseId: 'DiagnoseId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

