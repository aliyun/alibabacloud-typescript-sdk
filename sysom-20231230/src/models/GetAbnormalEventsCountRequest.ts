// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbnormalEventsCountRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * 2ijff4be-bf24-4070-89ca-c47c879b0g32
   */
  cluster?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
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
   * Level of abnormal events.
   * 
   * @example
   * potential
   */
  level?: string;
  /**
   * @remarks
   * The namespace where the Pod resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Whether to display Pod abnormal events.
   * 
   * @example
   * 1
   */
  showPod?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      end: 'end',
      instance: 'instance',
      level: 'level',
      namespace: 'namespace',
      pod: 'pod',
      showPod: 'showPod',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      end: 'number',
      instance: 'string',
      level: 'string',
      namespace: 'string',
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

