// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbnormalEventsCountRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 2ijff4be-bf24-4070-89ca-c47c879b0g32
   */
  cluster?: string;
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
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The severity level of abnormal events.
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
   * The pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Specifies whether to display abnormal events of the pod.
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
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      cluster: 'cluster',
      end: 'end',
      instance: 'instance',
      level: 'level',
      namespace: 'namespace',
      pod: 'pod',
      showPod: 'showPod',
      start: 'start',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      cluster: 'string',
      end: 'number',
      instance: 'string',
      level: 'string',
      namespace: 'string',
      pod: 'string',
      showPod: 'number',
      start: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

