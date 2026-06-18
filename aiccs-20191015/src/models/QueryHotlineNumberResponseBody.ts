// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList extends $dara.Model {
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * 6083****
   */
  groupId?: number;
  /**
   * @remarks
   * The skill group name.
   * 
   * @example
   * 技能组A
   */
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
   * @remarks
   * Department ID.
   * 
   * @example
   * 2256****
   */
  departmentId?: number;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * 部门A
   */
  departmentName?: string;
  /**
   * @remarks
   * The skill group list.
   */
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
   * @remarks
   * Outbound calls apply to all departments.
   * 
   * @example
   * true
   */
  calloutAllDepartment?: boolean;
  /**
   * @remarks
   * List of departments for which outbound calls are effective.
   */
  calloutRangeList?: QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeList[];
  /**
   * @remarks
   * Number description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Satisfaction status. Valid values:  
   * - **0**: Neither inbound nor outbound calls are enabled.  
   * - **1**: Inbound calls are enabled.  
   * - **2**: Outbound calls are enabled.  
   * - **3**: Both inbound and outbound calls are enabled.
   * 
   * @example
   * 0
   */
  evaluationStatus?: number;
  /**
   * @remarks
   * Incoming call flow ID.
   * 
   * @example
   * 12
   */
  flowId?: number;
  /**
   * @remarks
   * Inbound flow name.
   * 
   * @example
   * 测试流程
   */
  flowName?: string;
  /**
   * @remarks
   * Hotline number.
   * 
   * @example
   * 0571****2211
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * Indicates whether the number is used for inbound calls.
   * 
   * @example
   * true
   */
  inBoundEnabled?: boolean;
  /**
   * @remarks
   * Number location.
   * 
   * @example
   * 浙江杭州
   */
  location?: string;
  /**
   * @remarks
   * Indicates whether the number is used for outbound calls.
   * 
   * @example
   * true
   */
  outboundEnabled?: boolean;
  /**
   * @remarks
   * Carrier.
   * 
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
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number list.
   */
  hotlineNumList?: QueryHotlineNumberResponseBodyDataHotlineNumList[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total amount of data.
   * 
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
   * @remarks
   * The status code. A value of Success indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Hotline number configuration information.
   */
  data?: QueryHotlineNumberResponseBodyData;
  /**
   * @remarks
   * Status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
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

