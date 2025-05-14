// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList } from "./QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList";


export class QueryHotlineNumberResponseBodyDataHotlineNumList extends $dara.Model {
  /**
   * @example
   * true
   */
  calloutAllDepartment?: boolean;
  calloutRangeList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList[];
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * 0
   */
  evaluationStatus?: number;
  /**
   * @example
   * 12
   */
  flowId?: number;
  /**
   * @example
   * 测试流程
   */
  flowName?: string;
  /**
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @example
   * true
   */
  inBoundEnabled?: boolean;
  /**
   * @example
   * 浙江杭州
   */
  location?: string;
  /**
   * @example
   * true
   */
  outboundEnabled?: boolean;
  /**
   * @example
   * 电信
   */
  sp?: string;
  static names(): { [key: string]: string } {
    return {
      calloutAllDepartment: 'CalloutAllDepartment',
      calloutRangeList: 'CalloutRangeList',
      description: 'Description',
      evaluationStatus: 'EvaluationStatus',
      flowId: 'FlowId',
      flowName: 'FlowName',
      hotlineNumber: 'HotlineNumber',
      inBoundEnabled: 'InBoundEnabled',
      location: 'Location',
      outboundEnabled: 'OutboundEnabled',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calloutAllDepartment: 'boolean',
      calloutRangeList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList },
      description: 'string',
      evaluationStatus: 'number',
      flowId: 'number',
      flowName: 'string',
      hotlineNumber: 'string',
      inBoundEnabled: 'boolean',
      location: 'string',
      outboundEnabled: 'boolean',
      sp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.calloutRangeList)) {
      $dara.Model.validateArray(this.calloutRangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

