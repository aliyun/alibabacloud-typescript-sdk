// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic state. Valid values:
   * 
   * *   standalone: independent traffic.
   * *   grouping: grouped traffic.
   * 
   * @example
   * grouping
   */
  trafficState?: string;
  /**
   * @remarks
   * The weight of the service. Valid values: [-1, 1000].
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      trafficState: 'TrafficState',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficState: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

