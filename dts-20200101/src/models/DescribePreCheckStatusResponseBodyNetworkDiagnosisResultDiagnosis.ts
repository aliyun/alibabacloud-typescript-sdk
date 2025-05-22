// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodyNetworkDiagnosisResultDiagnosis extends $dara.Model {
  /**
   * @remarks
   * Document address for China region.
   * 
   * @example
   * https://***.ali***.com/document_detail/470447.html
   */
  cnDocUrl?: string;
  /**
   * @remarks
   * Diagnostic code.
   * 
   * @example
   * dts.kunlun.diagnosis.network.express_doc
   */
  code?: string;
  /**
   * @remarks
   * Access point, the return values are: - **source**: source end. - **destination**: destination end. - **unknown**: unknown.
   * 
   * @example
   * source
   */
  endpointType?: string;
  /**
   * @remarks
   * Overseas region document address.
   * 
   * @example
   * https://www.ali***.com/help/en/data-transmission-service/latest/how-to-solve-an-error-when-accessing-a-database-instance-to-dts-using-vpn
   */
  internationalDocUrl?: string;
  /**
   * @remarks
   * Reserved field for diagnostic results, default is empty.
   * 
   * @example
   * none
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      cnDocUrl: 'CnDocUrl',
      code: 'Code',
      endpointType: 'EndpointType',
      internationalDocUrl: 'InternationalDocUrl',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnDocUrl: 'string',
      code: 'string',
      endpointType: 'string',
      internationalDocUrl: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

