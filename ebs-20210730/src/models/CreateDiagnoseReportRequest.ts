// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotency. This lets you safely retry the request without creating a duplicate diagnostic report. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The diagnosis type. The only valid value is:
   * 
   * - Performance: performance diagnosis
   * 
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The end time for the diagnosis, in UTC. The time must be in the ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ).
   * 
   * @example
   * 2024-09-07T16:49:25Z
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID. Call the [DescribeRegions](https://help.aliyun.com/zh/ecs/developer-reference/api-ebs-2021-07-30-describeregions?spm=a2c4g.11186623.0.i7) operation to find all regions supported by EBS Data Insight.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * d-asb1s8***
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The only valid value is:
   * 
   * - Disk: a cloud disk
   * 
   * @example
   * Disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time for the diagnosis, in UTC. The time must be in the ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ).
   * 
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

