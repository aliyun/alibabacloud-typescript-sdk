// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList extends $dara.Model {
  /**
   * @example
   * 6083****
   */
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList extends $dara.Model {
  /**
   * @example
   * 2256****
   */
  departmentId?: number;
  departmentName?: string;
  groupDOList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      groupDOList: 'GroupDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
      groupDOList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList },
    };
  }

  validate() {
    if(Array.isArray(this.groupDOList)) {
      $dara.Model.validateArray(this.groupDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class QueryHotlineNumberResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  hotlineNumList?: QueryHotlineNumberResponseBodyDataHotlineNumList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hotlineNumList: 'HotlineNumList',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hotlineNumList: { 'type': 'array', 'itemType': QueryHotlineNumberResponseBodyDataHotlineNumList },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotlineNumList)) {
      $dara.Model.validateArray(this.hotlineNumList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryHotlineNumberResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryHotlineNumberResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

