// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic mode. Valid values: auto and customized. auto: The traffic is automatically allocated based on the proportion of the number of instances to the total number of instances. customized: The traffic is allocated based on a custom weight.
   * 
   * @example
   * auto
   */
  trafficMode?: string;
  static names(): { [key: string]: string } {
    return {
      trafficMode: 'TrafficMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

