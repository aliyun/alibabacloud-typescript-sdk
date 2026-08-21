// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostCountRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 1808078950770264
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

