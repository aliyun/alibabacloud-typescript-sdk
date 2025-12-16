// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value must be a UNIX timestamp (in seconds). If left empty, the current time is used.
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
   * *   0: the basic job data.
   * *   1: the job running data.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  metricType?: number;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   query: queries data in a time range.
   * *   query_range: queries time series data in a time range.
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
   * The beginning of the time range to query. The value must be a UNIX timestamp (in seconds).
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

