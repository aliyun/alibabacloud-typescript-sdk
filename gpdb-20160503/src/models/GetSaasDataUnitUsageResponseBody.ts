// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasDataUnitUsageResponseBodyDistribution extends $dara.Model {
  /**
   * @remarks
   * 精确非负十进制字符串，不使用浮点或指数格式；金额不完整时为null。
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  /**
   * @remarks
   * 调用时的项目归因；缺失时为null，不影响总量。
   * 
   * @example
   * project-1
   * 
   * **if can be null:**
   * true
   */
  projectId?: string;
  /**
   * @remarks
   * 同一场景和项目ID取查询范围内最新非空名称快照，同秒取字典序最大值；缺失为null。
   * 
   * @example
   * 场景重制
   * 
   * **if can be null:**
   * true
   */
  projectName?: string;
  /**
   * @example
   * drama_game_oneshot
   */
  usageScene?: string;
  /**
   * @remarks
   * 由Meta原值到中文名的字典补充，不是SLS字段。UsageScene始终保留日志原值；无中文名则名称也用原值；空白归其他。同中文名不同编码不合并。
   * 
   * @example
   * 游戏生成
   */
  usageSceneName?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      usageScene: 'UsageScene',
      usageSceneName: 'UsageSceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      projectId: 'string',
      projectName: 'string',
      usageScene: 'string',
      usageSceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodySummary extends $dara.Model {
  /**
   * @remarks
   * 精确非负十进制字符串，不使用浮点或指数格式；金额不完整时为null。
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyTimeSeriesScenes extends $dara.Model {
  /**
   * @remarks
   * 精确非负十进制字符串，不使用浮点或指数格式；金额不完整时为null。
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  /**
   * @remarks
   * 调用时的项目归因；缺失时为null，不影响总量。
   * 
   * @example
   * project-1
   * 
   * **if can be null:**
   * true
   */
  projectId?: string;
  /**
   * @remarks
   * 同一场景和项目ID取查询范围内最新非空名称快照，同秒取字典序最大值；缺失为null。
   * 
   * @example
   * 场景重制
   * 
   * **if can be null:**
   * true
   */
  projectName?: string;
  /**
   * @example
   * game_translation
   */
  usageScene?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      usageScene: 'UsageScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      projectId: 'string',
      projectName: 'string',
      usageScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyTimeSeries extends $dara.Model {
  /**
   * @remarks
   * 精确非负十进制字符串，不使用浮点或指数格式；金额不完整时为null。
   * 
   * @example
   * 2.82
   * 
   * **if can be null:**
   * true
   */
  dataUnit?: string;
  scenes?: GetSaasDataUnitUsageResponseBodyTimeSeriesScenes[];
  /**
   * @example
   * 2026-10-20T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      dataUnit: 'DataUnit',
      scenes: 'Scenes',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUnit: 'string',
      scenes: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyTimeSeriesScenes },
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBodyWarnings extends $dara.Model {
  /**
   * @remarks
   * 包括DATA_INCOMPLETE和DATA_UNIT_PENDING。
   * 
   * @example
   * DATA_INCOMPLETE
   */
  code?: string;
  /**
   * @example
   * 部分用量尚未就绪
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSaasDataUnitUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * 按DataUnit降序，未知金额排末尾，同值按场景码、项目ID和名称升序。按场景和项目ID分组；无ID但有名称按名称分组；两者均缺失的记录为未关联项目。完整结果各项之和等于汇总；缺失或空白的日志场景归other（其他）；有值但未配置映射的场景保留原值作为编码和展示名，正常计入总量；无记录的other不创建空行。
   */
  distribution?: GetSaasDataUnitUsageResponseBodyDistribution[];
  /**
   * @example
   * 2026-10-20T02:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * mock_req_success
   */
  requestId?: string;
  /**
   * @example
   * agdb-example
   */
  serviceId?: string;
  /**
   * @example
   * 2026-10-20T00:00:00Z
   */
  startTime?: string;
  summary?: GetSaasDataUnitUsageResponseBodySummary;
  /**
   * @remarks
   * 按UTC桶起点升序。完整查询补齐零桶；未知金额为null，不以零替代。
   */
  timeSeries?: GetSaasDataUnitUsageResponseBodyTimeSeries[];
  warnings?: GetSaasDataUnitUsageResponseBodyWarnings[];
  static names(): { [key: string]: string } {
    return {
      distribution: 'Distribution',
      endTime: 'EndTime',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      startTime: 'StartTime',
      summary: 'Summary',
      timeSeries: 'TimeSeries',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distribution: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyDistribution },
      endTime: 'string',
      requestId: 'string',
      serviceId: 'string',
      startTime: 'string',
      summary: GetSaasDataUnitUsageResponseBodySummary,
      timeSeries: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyTimeSeries },
      warnings: { 'type': 'array', 'itemType': GetSaasDataUnitUsageResponseBodyWarnings },
    };
  }

  validate() {
    if(Array.isArray(this.distribution)) {
      $dara.Model.validateArray(this.distribution);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(Array.isArray(this.timeSeries)) {
      $dara.Model.validateArray(this.timeSeries);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

