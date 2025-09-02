// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemindsResponseBodyDataReminds extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values: MAIL, SMS, and PHONE. The value MAIL indicates that the notification is sent by email. Only DataWorks Professional Edition and more advanced editions support the PHONE notification method.
   */
  alertMethods?: string[];
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts used by alert recipients.
   */
  alertTargets?: string[];
  /**
   * @remarks
   * The alert recipient. Valid values: OWNER and OTHER. The value OWNER indicates the node owner. The value OTHER indicates a specified user.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The IDs of the baselines to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is BASELINE.
   */
  baselineIds?: number[];
  /**
   * @remarks
   * The IDs of the workflows to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is BIZPROCESS.
   */
  bizProcessIds?: number[];
  /**
   * @remarks
   * The end time of the quiet hours. The time is in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
   * 
   * @example
   * 08:00
   */
  dndEnd?: string;
  /**
   * @remarks
   * The start time of the quiet hours. The time is in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
   * 
   * @example
   * 00:00
   */
  dndStart?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the rule creator.
   * 
   * @example
   * 952795****
   */
  founder?: string;
  /**
   * @remarks
   * The IDs of the nodes to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is NODE.
   */
  nodeIds?: number[];
  /**
   * @remarks
   * The IDs of the workspaces to which the custom alert rule is applied. This parameter is returned if the value of the RemindUnit parameter is PROJECT.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The custom alert rule ID.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  /**
   * @remarks
   * The name of the custom alert rule.
   * 
   * @example
   * Alert Rule
   */
  remindName?: string;
  /**
   * @remarks
   * The condition that triggers an alert. Valid values: FINISHED, UNFINISHED, ERROR, CYCLE_UNFINISHED, and TIMEOUT.
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the object to which the custom alert rule is applied. Valid values: NODE, BASELINE, PROJECT, and BIZPROCESS. The value NODE indicates a node. The value BASELINE indicates a baseline. The value PROJECT indicates a workspace. The value BIZPROCESS indicates a workflow.
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * Indicates whether the custom alert rule is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  useflag?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselineIds: 'BaselineIds',
      bizProcessIds: 'BizProcessIds',
      dndEnd: 'DndEnd',
      dndStart: 'DndStart',
      founder: 'Founder',
      nodeIds: 'NodeIds',
      projectIds: 'ProjectIds',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      useflag: 'Useflag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertTargets: { 'type': 'array', 'itemType': 'string' },
      alertUnit: 'string',
      baselineIds: { 'type': 'array', 'itemType': 'number' },
      bizProcessIds: { 'type': 'array', 'itemType': 'number' },
      dndEnd: 'string',
      dndStart: 'string',
      founder: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'number' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      useflag: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.alertMethods)) {
      $dara.Model.validateArray(this.alertMethods);
    }
    if(Array.isArray(this.alertTargets)) {
      $dara.Model.validateArray(this.alertTargets);
    }
    if(Array.isArray(this.baselineIds)) {
      $dara.Model.validateArray(this.baselineIds);
    }
    if(Array.isArray(this.bizProcessIds)) {
      $dara.Model.validateArray(this.bizProcessIds);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of custom alert rules.
   */
  reminds?: ListRemindsResponseBodyDataReminds[];
  /**
   * @remarks
   * The total number of custom alert rules returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reminds: 'Reminds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      reminds: { 'type': 'array', 'itemType': ListRemindsResponseBodyDataReminds },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reminds)) {
      $dara.Model.validateArray(this.reminds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemindsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListRemindsResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRemindsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

