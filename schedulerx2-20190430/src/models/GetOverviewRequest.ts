// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOverviewRequest extends $dara.Model {
  /**
   * @example
   * 1684166400
   */
  endTime?: number;
  /**
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  metricType?: number;
  /**
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * query
   */
  operate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
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

