// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectionReportResponseBodyDataDataItemsData extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * DBInstanceStatus
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
  /**
   * @remarks
   * The returned results.
   */
  data?: GetInspectionReportResponseBodyDataDataItemsData[];
  /**
   * @remarks
   * The level of the alert.
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The response message.
   */
  message?: string;
  /**
   * @remarks
   * The name of the category.
   * 
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
   * @remarks
   * The group ID.
   * 
   * @example
   * instance_info
   */
  group?: string;
  /**
   * @remarks
   * The items in the result.
   */
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
   * @remarks
   * The number of errors in the report.
   * 
   * @example
   * 2
   */
  error?: number;
  /**
   * @remarks
   * The number of failures in the report.
   * 
   * @example
   * 3
   */
  failed?: number;
  /**
   * @remarks
   * The number of normal records in the report.
   * 
   * @example
   * 10
   */
  normal?: number;
  /**
   * @remarks
   * The number of warnings in the report.
   * 
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
  /**
   * @remarks
   * The returned results.
   */
  data?: GetInspectionReportResponseBodyDataData[];
  /**
   * @remarks
   * The end time of the inspection. Specify the time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2026-01-31T02:05:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The description of the instance.
   */
  instanceDesc?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2zep6e5u6l2yu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The hierarchical summary of the report.
   */
  levelSummary?: GetInspectionReportResponseBodyDataLevelSummary;
  /**
   * @remarks
   * The report text in the markdown format.
   * 
   * *   If the InstanceId parameter is not specified, all content of the inspection report is returned. However, the MarkdownText field is empty.
   * *   If the InstanceId parameter is specified, the content related to the instance is returned in the MarkdownText field.
   */
  markdownText?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The start time of the inspection task. Specify the time in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
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
  /**
   * @remarks
   * The details of the result.
   */
  data?: GetInspectionReportResponseBodyData[];
  /**
   * @remarks
   * The report text in the markdown format.
   */
  markdownText?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The inspection report ID.
   * 
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

