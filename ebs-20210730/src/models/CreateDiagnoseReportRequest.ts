// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnoseReportRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  diagnoseType?: string;
  /**
   * @example
   * 2024-09-07T16:49:25Z
   */
  endTime?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * d-asb1s8***
   */
  resourceId?: string;
  /**
   * @example
   * Disk
   */
  resourceType?: string;
  /**
   * @example
   * 2024-09-01T02:26:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diagnoseType: 'DiagnoseType',
      endTime: 'EndTime',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diagnoseType: 'string',
      endTime: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
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

