// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail extends $dara.Model {
  /**
   * @remarks
   * The information of the data synchronization solution.
   * 
   * @example
   * {\\"fusionProps\\":{\\"dataSource\\":[{\\"fileName\\":\\"holo_20221020161613\\",\\"status\\":\\"SUCCESS\\"}]},\\"customProps\\":{\\"showSN\\":true,\\"columns\\":[{\\"dataIndex\\":\\"fileName\\",\\"width\\":0.8,\\"title\\":\\"Real-time synchronization name\\"},{\\"dataIndex\\":\\"status\\",\\"width\\":0.2,\\"title\\":\\"Status\\"}]},\\"componentName\\":\\"Table\\"}
   */
  info?: string;
  /**
   * @remarks
   * The status of the step in the data synchronization solution.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the step in the data synchronization solution.
   * 
   * @example
   * 1
   */
  stepId?: number;
  /**
   * @remarks
   * The name of the step in the data synchronization solution.
   * 
   * @example
   * Create a base table
   */
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      status: 'Status',
      stepId: 'StepId',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      status: 'string',
      stepId: 'number',
      stepName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyDataSolutionInfo extends $dara.Model {
  /**
   * @remarks
   * The creator of the data synchronization solution.
   * 
   * @example
   * dataworks_3h1
   */
  creatorName?: string;
  /**
   * @remarks
   * The ID of the data synchronization solution.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The status of the data synchronization solution.
   * 
   * @example
   * run
   */
  status?: string;
  /**
   * @remarks
   * The step details of the data synchronization solution.
   */
  stepDetail?: GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail[];
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      id: 'Id',
      status: 'Status',
      stepDetail: 'StepDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      id: 'number',
      status: 'string',
      stepDetail: { 'type': 'array', 'itemType': GetDISyncInstanceInfoResponseBodyDataSolutionInfoStepDetail },
    };
  }

  validate() {
    if(Array.isArray(this.stepDetail)) {
      $dara.Model.validateArray(this.stepDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cause of the failure to obtain the status of the real-time synchronization task or data synchronization solution. If the status of the real-time synchronization task or data synchronization solution is obtained, the value null is returned.
   * 
   * @example
   * fileId[100] is invalid
   */
  message?: string;
  /**
   * @remarks
   * *   If the TaskType parameter is set to DI_REALTIME, the Name parameter indicates the name of the real-time synchronization task.
   * *   If the TaskType parameter is set to DI_SOLUTION, the value null is returned.
   * 
   * @example
   * streamx_name
   */
  name?: string;
  /**
   * @remarks
   * *   If the TaskType parameter is set to DI_REALTIME, the value null is returned.
   * *   If the TaskType parameter is set to DI_SOLUTION, the SolutionInfo parameter indicates the details of the data synchronization solution.
   */
  solutionInfo?: GetDISyncInstanceInfoResponseBodyDataSolutionInfo;
  /**
   * @remarks
   * *   If the TaskType parameter is set to DI_REALTIME, the Status parameter indicates the status of the real-time synchronization task. Valid values: PAUSE, NORUN, RUN, KILLING, and WAIT.
   * *   If the TaskType parameter is set to DI_SOLUTION, the Status parameter indicates the status of the data synchronization solution. Valid values: success and fail.
   * 
   * @example
   * RUN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      solutionInfo: 'SolutionInfo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      solutionInfo: GetDISyncInstanceInfoResponseBodyDataSolutionInfo,
      status: 'string',
    };
  }

  validate() {
    if(this.solutionInfo && typeof (this.solutionInfo as any).validate === 'function') {
      (this.solutionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDISyncInstanceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the real-time synchronization task or data synchronization solution.
   */
  data?: GetDISyncInstanceInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDISyncInstanceInfoResponseBodyData,
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

