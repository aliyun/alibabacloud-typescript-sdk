// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostCountRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @remarks
   * End Time
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
   * Start Time
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
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      end: 'number',
      instance: 'string',
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

