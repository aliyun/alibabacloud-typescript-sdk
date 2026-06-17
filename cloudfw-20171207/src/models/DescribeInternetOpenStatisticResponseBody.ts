// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of public IP addresses exposed to the Internet.
   * 
   * @example
   * 9
   */
  internetIpNum?: number;
  /**
   * @remarks
   * The total number of ports exposed to the Internet.
   * 
   * @example
   * 38
   */
  internetPortNum?: number;
  /**
   * @remarks
   * The number of risky public IP addresses exposed to the Internet.
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
   * The total number of applications exposed to the Internet.
   * 
   * @example
   * 15
   */
  internetServiceNum?: number;
  /**
   * @remarks
   * The number of public IP addresses of Server Load Balancer (SLB) instances.
   * 
   * @example
   * 10
   */
  internetSlbIpNum?: number;
  /**
   * @remarks
   * The number of public ports of SLB instances.
   * 
   * @example
   * 16
   */
  internetSlbIpPortNum?: number;
  /**
   * @remarks
   * The number of ports that are not protected by an access control list (ACL).
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

