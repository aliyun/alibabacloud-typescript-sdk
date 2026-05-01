// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelResponseBodyData extends $dara.Model {
  /**
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @example
   * {
   *     "appKey": "abc",
   *     "appSecret": "efg"
   * }
   */
  config?: string;
  /**
   * @example
   * Normal
   */
  riskType?: string;
  /**
   * @example
   * Configured
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      riskType: 'RiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      riskType: 'string',
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

export class GetRuntimeChannelResponseBody extends $dara.Model {
  data?: GetRuntimeChannelResponseBodyData[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetRuntimeChannelResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

