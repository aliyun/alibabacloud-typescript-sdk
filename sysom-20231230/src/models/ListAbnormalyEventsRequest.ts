// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbnormalyEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 2d33d4be-bf54-4070-82ca-c1dc2d8b1562
   */
  cluster?: string;
  /**
   * @remarks
   * This field is present when paging is used and indicates the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @remarks
   * Anomalous activity name
   * 
   * @example
   * 节点根文件系统使用检测
   */
  event?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * Level of the anomalous activity
   * 
   * @example
   * potential
   */
  level?: string;
  /**
   * @remarks
   * Namespace where the pod is located
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Page size. The default value is 5. Valid values are in the range [1,100].
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Pod name
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Whether to display anomalous activities of the pod
   * 
   * @example
   * 1
   */
  showPod?: number;
  /**
   * @remarks
   * Start time
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

