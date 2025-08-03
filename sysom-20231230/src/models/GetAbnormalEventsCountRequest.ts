// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAbnormalEventsCountRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  level?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * test-pod
   */
  pod?: string;
  showPod?: number;
  /**
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

