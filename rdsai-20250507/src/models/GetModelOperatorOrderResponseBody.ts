// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelOperatorOrderResponseBodyDataInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance end time (format: Timestamp).
   * 
   * @example
   * 1775145600000
   */
  endTime?: number;
  /**
   * @remarks
   * instance type
   * 
   * @example
   * xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance start time (format: Timestamp).
   * 
   * @example
   * 1772439028000
   */
  startTime?: number;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * active/creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceClass: 'string',
      instanceId: 'string',
      startTime: 'number',
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

export class GetModelOperatorOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a valid order exists.
   * 
   * @example
   * true
   */
  hasValidOrder?: boolean;
  /**
   * @remarks
   * The instance list.
   */
  instanceList?: GetModelOperatorOrderResponseBodyDataInstanceList[];
  static names(): { [key: string]: string } {
    return {
      hasValidOrder: 'HasValidOrder',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasValidOrder: 'boolean',
      instanceList: { 'type': 'array', 'itemType': GetModelOperatorOrderResponseBodyDataInstanceList },
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOperatorOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  data?: GetModelOperatorOrderResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @remarks
   * Request result.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModelOperatorOrderResponseBodyData,
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

