// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of open public IP addresses.
   * 
   * @example
   * 9
   */
  internetIpNum?: number;
  /**
   * @remarks
   * The total number of open ports.
   * 
   * @example
   * 38
   */
  internetPortNum?: number;
  /**
   * @remarks
   * The number of risky open public IP addresses.
   * 
   * @example
   * 8
   */
  internetRiskIpNum?: number;
  /**
   * @remarks
   * The number of risky ports.
   * 
   * @example
   * 5
   */
  internetRiskPortNum?: number;
  /**
   * @remarks
   * The number of risky applications.
   * 
   * @example
   * 3
   */
  internetRiskServiceNum?: number;
  /**
   * @remarks
   * The total number of open applications.
   * 
   * @example
   * 15
   */
  internetServiceNum?: number;
  /**
   * @remarks
   * The number of SLB public IP addresses.
   * 
   * @example
   * 10
   */
  internetSlbIpNum?: number;
  /**
   * @remarks
   * The number of SLB public ports.
   * 
   * @example
   * 16
   */
  internetSlbIpPortNum?: number;
  /**
   * @remarks
   * The number of ports that are not protected by access control lists (ACLs).
   * 
   * @example
   * 6
   */
  internetUnprotectedPortNum?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6AB7822C-0D73-5D1D-81FD-45D4FB7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      internetIpNum: 'InternetIpNum',
      internetPortNum: 'InternetPortNum',
      internetRiskIpNum: 'InternetRiskIpNum',
      internetRiskPortNum: 'InternetRiskPortNum',
      internetRiskServiceNum: 'InternetRiskServiceNum',
      internetServiceNum: 'InternetServiceNum',
      internetSlbIpNum: 'InternetSlbIpNum',
      internetSlbIpPortNum: 'InternetSlbIpPortNum',
      internetUnprotectedPortNum: 'InternetUnprotectedPortNum',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIpNum: 'number',
      internetPortNum: 'number',
      internetRiskIpNum: 'number',
      internetRiskPortNum: 'number',
      internetRiskServiceNum: 'number',
      internetServiceNum: 'number',
      internetSlbIpNum: 'number',
      internetSlbIpPortNum: 'number',
      internetUnprotectedPortNum: 'number',
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

