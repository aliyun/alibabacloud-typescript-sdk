// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusGlobalViewResponseBodyDataInfo extends $dara.Model {
  /**
   * @remarks
   * The list of instances that failed to be added.
   * 
   * @example
   * [{"sourceName": "数据源名称- ArmsPrometheus","sourceType":"AlibabaPrometheus","userId":"UserID","clusterId":"ClusterId",}]
   */
  failedInstances?: string;
  /**
   * @remarks
   * The aggregation instance ID.
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
   * 
   * @example
   * {regionId: 实例所属region, globalViewClusterId: 实例Id, failedInstances: 数据源JSON list中，添加失败的单个JSON的list}
   */
  info?: AddPrometheusGlobalViewResponseBodyDataInfo;
  /**
   * @remarks
   * The additional description.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the query was successful.
   * 
   * - `true`: Successful.
   * - `false`: Failed.
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
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response struct.
   */
  data?: AddPrometheusGlobalViewResponseBodyData;
  /**
   * @remarks
   * The message returned for the result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
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

