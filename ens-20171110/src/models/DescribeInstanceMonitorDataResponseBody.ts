// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $dara.Model {
  /**
   * @remarks
   * The vCPU usage of the instance, which is raw data. For example, a value of 0.02 indicates that the usage is 2%.
   * 
   * @example
   * 0.02
   */
  CPU?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not yet supported.
   * 
   * @example
   * Not currently supported
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      instanceId: 'InstanceId',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      instanceId: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBodyMonitorData extends $dara.Model {
  instanceMonitorData?: DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMonitorData)) {
      $dara.Model.validateArray(this.instanceMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The set of InstanceMonitorDataType data.
   */
  monitorData?: DescribeInstanceMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeInstanceMonitorDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

