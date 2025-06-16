// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo } from "./DescribePhysicalConnectionLoaresponseBodyPhysicalConnectionLoatypePminfo";


export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType extends $dara.Model {
  /**
   * @remarks
   * The name of the construction company.
   * 
   * @example
   * company
   */
  companyLocalizedName?: string;
  /**
   * @remarks
   * The name of the organization that requires the Express Connect circuit.
   * 
   * @example
   * test1234
   */
  companyName?: string;
  /**
   * @remarks
   * The time when construction starts.
   * 
   * @example
   * 2019-02-26T08:00:00Z
   */
  constructionTime?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-bp1ca4wca27****
   */
  instanceId?: string;
  /**
   * @remarks
   * The circuit code provided by the connectivity provider.
   * 
   * @example
   * aaa111
   */
  lineCode?: string;
  /**
   * @remarks
   * The label of the cable in the data center.
   * 
   * @example
   * bbb222
   */
  lineLabel?: string;
  /**
   * @remarks
   * The contact information about line O\\&M.
   * 
   * @example
   * 1388888****
   */
  lineSPContactInfo?: string;
  /**
   * @remarks
   * The ISP. Valid values:
   * 
   * *   **China Telecom**
   * *   **China Unicom**
   * *   **China Mobile**
   * *   **Other ISPs in China**
   * 
   * @example
   * Other ISPs in China
   */
  lineServiceProvider?: string;
  /**
   * @remarks
   * The type of the Express Connect circuit. Valid values:
   * 
   * *   **MSTP**
   * *   **MPLSVPN**
   * *   **FIBRE**
   * *   **Other**
   * 
   * @example
   * FIBRE
   */
  lineType?: string;
  /**
   * @remarks
   * The download URL of the LOA file.
   * 
   * @example
   * http://******
   */
  loaUrl?: string;
  /**
   * @remarks
   * The information about the construction workers.
   */
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo;
  /**
   * @remarks
   * The on-site construction company.
   * 
   * @example
   * ctcu
   */
  SI?: string;
  /**
   * @remarks
   * The status of the LOA. Valid values:
   * 
   * *   **Applying**: The LOA is pending for approval.
   * *   **Accept**: The LOA is approved.
   * *   **Available**: The LOA is available.
   * *   **Rejected**: The LOA is rejected.
   * *   **Completing**: The Express Connect circuit is under construction.
   * *   **Complete**: The Express Connect circuit is installed.
   * *   **Deleted**: The LOA is deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      companyLocalizedName: 'CompanyLocalizedName',
      companyName: 'CompanyName',
      constructionTime: 'ConstructionTime',
      instanceId: 'InstanceId',
      lineCode: 'LineCode',
      lineLabel: 'LineLabel',
      lineSPContactInfo: 'LineSPContactInfo',
      lineServiceProvider: 'LineServiceProvider',
      lineType: 'LineType',
      loaUrl: 'LoaUrl',
      PMInfo: 'PMInfo',
      SI: 'SI',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLocalizedName: 'string',
      companyName: 'string',
      constructionTime: 'string',
      instanceId: 'string',
      lineCode: 'string',
      lineLabel: 'string',
      lineSPContactInfo: 'string',
      lineServiceProvider: 'string',
      lineType: 'string',
      loaUrl: 'string',
      PMInfo: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo,
      SI: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.PMInfo && typeof (this.PMInfo as any).validate === 'function') {
      (this.PMInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

