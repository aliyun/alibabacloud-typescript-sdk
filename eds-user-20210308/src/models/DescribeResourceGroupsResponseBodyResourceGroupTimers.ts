// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsResponseBodyResourceGroupTimers extends $dara.Model {
  bindStatus?: string;
  /**
   * @example
   * t-asdzx0mbjhg***
   */
  id?: string;
  name?: string;
  timerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
      id: 'Id',
      name: 'Name',
      timerStatus: 'TimerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'string',
      id: 'string',
      name: 'string',
      timerStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

