// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupEventsResponseBodyDataEventsSource extends $dara.Model {
  /**
   * @remarks
   * The component.
   * 
   * @example
   * kubelet
   */
  component?: string;
  /**
   * @remarks
   * The host.
   * 
   * @example
   * eci
   */
  host?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
      host: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

