// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp of the data, in seconds. Example: 1684166400. If this parameter is not specified, the current time is used by default.
   * 
   * @example
   * 1684166400
   */
  endTime?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - 0: basic task information.
   * - 1: task execution information.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  metricType?: number;
  /**
   * @remarks
   * The namespace UID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for special third-party integrations.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - query: queries interval data.
   * - query_range: queries interval time series data.
   * 
   * This parameter is required.
   * 
   * @example
   * query
   */
  operate?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start timestamp of the data, in seconds. Example: 1684166400.
   * 
   * This parameter is required.
   * 
   * @example
   * 1684166400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricType: 'MetricType',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      operate: 'Operate',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      metricType: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      operate: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

