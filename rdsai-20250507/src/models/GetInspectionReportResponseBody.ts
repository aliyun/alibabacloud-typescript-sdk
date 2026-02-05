// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectionReportResponseBodyDataDataItemsData extends $dara.Model {
  /**
   * @example
   * DBInstanceStatus
   */
  key?: string;
  /**
   * @example
   * Running
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportResponseBodyDataDataItems extends $dara.Model {
  data?: GetInspectionReportResponseBodyDataDataItemsData[];
  /**
   * @example
   * Normal
   */
  level?: string;
  message?: string;
  /**
   * @example
   * instance_runningstatus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      level: 'Level',
      message: 'Message',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataDataItemsData },
      level: 'string',
      message: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * instance_info
   */
  group?: string;
  items?: GetInspectionReportResponseBodyDataDataItems[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      items: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportResponseBodyDataLevelSummary extends $dara.Model {
  /**
   * @example
   * 2
   */
  error?: number;
  /**
   * @example
   * 3
   */
  failed?: number;
  /**
   * @example
   * 10
   */
  normal?: number;
  /**
   * @example
   * 1
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      failed: 'Failed',
      normal: 'Normal',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      failed: 'number',
      normal: 'number',
      warning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportResponseBodyData extends $dara.Model {
  data?: GetInspectionReportResponseBodyDataData[];
  /**
   * @example
   * 2026-01-31T02:05:04Z
   */
  endTime?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  instanceDesc?: string;
  /**
   * @example
   * rm-2zep6e5u6l2yu****
   */
  instanceId?: string;
  levelSummary?: GetInspectionReportResponseBodyDataLevelSummary;
  markdownText?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 2025-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      engineType: 'EngineType',
      instanceDesc: 'InstanceDesc',
      instanceId: 'InstanceId',
      levelSummary: 'LevelSummary',
      markdownText: 'MarkdownText',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataData },
      endTime: 'string',
      engineType: 'string',
      instanceDesc: 'string',
      instanceId: 'string',
      levelSummary: GetInspectionReportResponseBodyDataLevelSummary,
      markdownText: 'string',
      region: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.levelSummary && typeof (this.levelSummary as any).validate === 'function') {
      (this.levelSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportResponseBody extends $dara.Model {
  data?: GetInspectionReportResponseBodyData[];
  markdownText?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * 9d246af2-a0cd-4f69-857d-3785048f****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      markdownText: 'MarkdownText',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyData },
      markdownText: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

