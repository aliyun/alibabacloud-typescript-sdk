// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasDataUnitUsageRequest extends $dara.Model {
  /**
   * @remarks
   * UTC时间，格式yyyy-MM-ddTHH:mm:ssZ，秒必须为00。必须晚于StartTime且不晚于请求时刻，不自动裁剪查询范围。
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-20T02:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * 未删除的SaaS服务实例ID，不接受普通DBInstanceId替代。
   * 
   * This parameter is required.
   * 
   * @example
   * agdb-example
   */
  serviceId?: string;
  /**
   * @remarks
   * UTC时间，格式yyyy-MM-ddTHH:mm:ssZ，秒必须为00。不得早于请求时刻前30天；与EndTime组成左闭右开区间，跨度最多7天。
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-20T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * 支持hour（UTC小时）或day（UTC日），未传默认hour。仅决定趋势汇总方式，不在响应中回显。
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      regionId: 'string',
      serviceId: 'string',
      startTime: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

