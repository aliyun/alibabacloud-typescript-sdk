// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenStatisticResponseBody extends $dara.Model {
  /**
   * @example
   * 9
   */
  internetIpNum?: number;
  /**
   * @example
   * 38
   */
  internetPortNum?: number;
  /**
   * @example
   * 8
   */
  internetRiskIpNum?: number;
  /**
   * @example
   * 5
   */
  internetRiskPortNum?: number;
  /**
   * @example
   * 3
   */
  internetRiskServiceNum?: number;
  /**
   * @example
   * 15
   */
  internetServiceNum?: number;
  /**
   * @example
   * 10
   */
  internetSlbIpNum?: number;
  /**
   * @example
   * 16
   */
  internetSlbIpPortNum?: number;
  /**
   * @example
   * 6
   */
  internetUnprotectedPortNum?: number;
  /**
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

