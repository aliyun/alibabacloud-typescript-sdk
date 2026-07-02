// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbnormalyEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 2d33d4be-bf54-4070-82ca-c1dc2d8b1562
   */
  cluster?: string;
  /**
   * @remarks
   * The current page number. This parameter is present during paginated queries.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @remarks
   * The name of the anomaly event.
   * 
   * @example
   * 节点根文件系统使用检测
   */
  event?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The level of the anomaly event.
   * 
   * @example
   * potential
   */
  level?: string;
  /**
   * @remarks
   * The namespace of the pod.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 5. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Specifies whether to display pod anomaly events.
   * 
   * @example
   * 1
   */
  showPod?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      current: 'current',
      end: 'end',
      event: 'event',
      instance: 'instance',
      level: 'level',
      namespace: 'namespace',
      pageSize: 'pageSize',
      pod: 'pod',
      showPod: 'showPod',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      current: 'number',
      end: 'number',
      event: 'string',
      instance: 'string',
      level: 'string',
      namespace: 'string',
      pageSize: 'number',
      pod: 'string',
      showPod: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

