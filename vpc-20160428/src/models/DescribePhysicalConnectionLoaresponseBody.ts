// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo extends $dara.Model {
  PMCertificateNo?: string;
  PMCertificateType?: string;
  PMContactInfo?: string;
  PMGender?: string;
  PMName?: string;
  static names(): { [key: string]: string } {
    return {
      PMCertificateNo: 'PMCertificateNo',
      PMCertificateType: 'PMCertificateType',
      PMContactInfo: 'PMContactInfo',
      PMGender: 'PMGender',
      PMName: 'PMName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMCertificateNo: 'string',
      PMCertificateType: 'string',
      PMContactInfo: 'string',
      PMGender: 'string',
      PMName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo extends $dara.Model {
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo[];
  static names(): { [key: string]: string } {
    return {
      PMInfo: 'PMInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMInfo: { 'type': 'array', 'itemType': DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo },
    };
  }

  validate() {
    if(Array.isArray(this.PMInfo)) {
      $dara.Model.validateArray(this.PMInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType extends $dara.Model {
  /**
   * @remarks
   * The localized name of the company.
   * 
   * @example
   * company
   */
  companyLocalizedName?: string;
  /**
   * @remarks
   * The name of the company that requires the physical connection.
   * 
   * @example
   * test1234
   */
  companyName?: string;
  /**
   * @remarks
   * The time when construction personnel enter the site.
   * 
   * @example
   * 2019-02-26T08:00:00Z
   */
  constructionTime?: string;
  /**
   * @remarks
   * The description of the LOA.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID of the physical connection.
   * 
   * @example
   * pc-bp1ca4wca27****
   */
  instanceId?: string;
  /**
   * @remarks
   * The line code assigned by the line service provider.
   * 
   * @example
   * aaa111
   */
  lineCode?: string;
  /**
   * @remarks
   * The line label for the in-building cable at the data center.
   * 
   * @example
   * bbb222
   */
  lineLabel?: string;
  /**
   * @remarks
   * The contact information of the line O\\&M personnel.
   * 
   * @example
   * 1388888****
   */
  lineSPContactInfo?: string;
  /**
   * @remarks
   * The line service provider. Valid values:
   * 
   * - **China Telecom**
   * 
   * - **China Unicom**
   * 
   * - **China Mobile**
   * 
   * - **Other**
   * 
   * @example
   * 中国其他
   */
  lineServiceProvider?: string;
  /**
   * @remarks
   * The line type of the physical connection. Valid values:
   * 
   * - **MSTP**
   * 
   * - **MPLSVPN**
   * 
   * - **FIBRE**
   * 
   * - **Other**
   * 
   * @example
   * FIBRE
   */
  lineType?: string;
  /**
   * @remarks
   * The URL to download the LOA file.
   * 
   * @example
   * http://******
   */
  loaUrl?: string;
  /**
   * @remarks
   * Information about the construction personnel.
   */
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo;
  /**
   * @remarks
   * The system integrator (SI).
   * 
   * @example
   * ctcu
   */
  SI?: string;
  /**
   * @remarks
   * The status of the LOA. Valid values:
   * 
   * - **Applying**: The LOA application is in progress.
   * 
   * - **Accept**: The LOA application is approved.
   * 
   * - **Available**: The LOA is available.
   * 
   * - **Rejected**: The LOA application is rejected.
   * 
   * - **Completing**: The construction of the physical connection is in progress.
   * 
   * - **Complete**: The construction of the physical connection is complete.
   * 
   * - **Deleted**: The LOA is deleted.
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
      description: 'Description',
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
      description: 'string',
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

export class DescribePhysicalConnectionLOAResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the physical connection\\"s LOA.
   */
  physicalConnectionLOAType?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 318BB676-0A2B-43A0-9AD8-F1D34E93750F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionLOAType: 'PhysicalConnectionLOAType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionLOAType: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType,
      requestId: 'string',
    };
  }

  validate() {
    if(this.physicalConnectionLOAType && typeof (this.physicalConnectionLOAType as any).validate === 'function') {
      (this.physicalConnectionLOAType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

