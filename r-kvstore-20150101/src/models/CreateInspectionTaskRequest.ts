// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskRequest extends $dara.Model {
  /**
   * @example
   * 2026-07-29T06:59:26Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RESOURCE_USAGE
   */
  inspectionItems?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ta-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * 2026-07-29T05:59:26Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionItems: 'InspectionItems',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionItems: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

