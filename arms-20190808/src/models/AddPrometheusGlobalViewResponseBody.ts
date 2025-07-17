// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusGlobalViewResponseBodyDataInfo extends $dara.Model {
  /**
   * @remarks
   * The list of instances that failed to be added.
   * 
   * @example
   * [{"sourceName": "Data source name- ArmsPrometheus","sourceType":"AlibabaPrometheus","userId":"UserID","clusterId":"ClusterId",}]
   */
  failedInstances?: string;
  /**
   * @remarks
   * The ID of the global aggregation instance.
   * 
   * @example
   * global-v2-cn-1483223059272121-jmjjfznz
   */
  globalViewClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      failedInstances: 'FailedInstances',
      globalViewClusterId: 'GlobalViewClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstances: 'string',
      globalViewClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Info-level information.
   */
  info?: AddPrometheusGlobalViewResponseBodyDataInfo;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: AddPrometheusGlobalViewResponseBodyDataInfo,
      msg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPrometheusGlobalViewResponseBody extends $dara.Model {
  /**
   * @remarks
   * 状态码。说明 200表示成功。
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the array object.
   */
  data?: AddPrometheusGlobalViewResponseBodyData;
  /**
   * @remarks
   * 返回结果的提示信息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AddPrometheusGlobalViewResponseBodyData,
      message: 'string',
      requestId: 'string',
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

