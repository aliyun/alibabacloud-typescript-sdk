// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  slsConfigStatusList?: DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatusList: 'SlsConfigStatusList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatusList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatusList)) {
      $dara.Model.validateArray(this.slsConfigStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

