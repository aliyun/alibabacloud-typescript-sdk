// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $dara.Model {
  eipInfoList?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList[];
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * coop-line-001
   */
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfoList: 'EipInfoList',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfoList: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList },
      instanceId: 'string',
      line: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipInfoList)) {
      $dara.Model.validateArray(this.eipInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBody extends $dara.Model {
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

