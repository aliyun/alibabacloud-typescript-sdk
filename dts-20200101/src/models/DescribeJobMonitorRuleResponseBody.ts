// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeJobMonitorRuleResponseBodyMonitorRules } from "./DescribeJobMonitorRuleResponseBodyMonitorRules";


export class DescribeJobMonitorRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * ta7w132u12h****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the specified **DtsJobId** parameter is invalid, **The Value of Input Parameter %s is not valid** is returned for **ErrMessage** and **DtsJobId** is returned for **DynamicMessage**.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 403
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The monitoring rules of the DTS task.
   */
  monitorRules?: DescribeJobMonitorRuleResponseBodyMonitorRules[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CA14388-DD89-4A7B-8CDD-884A10CE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The call was successful.
   * *   **false**:The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The topics of all subtasks in the distributed change tracking task.
   */
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      monitorRules: 'MonitorRules',
      requestId: 'RequestId',
      success: 'Success',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      monitorRules: { 'type': 'array', 'itemType': DescribeJobMonitorRuleResponseBodyMonitorRules },
      requestId: 'string',
      success: 'boolean',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.monitorRules)) {
      $dara.Model.validateArray(this.monitorRules);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

