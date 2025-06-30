// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailResponseBodyEventDetailContent extends $dara.Model {
  /**
   * @remarks
   * The title of the content in the anomalous event.
   * 
   * @example
   * Anomaly description
   */
  label?: string;
  /**
   * @remarks
   * Exception event name.
   * 
   * @example
   * daliaoyuncom
   */
  name?: string;
  /**
   * @remarks
   * The description of the content in the anomalous event.
   * 
   * @example
   * The account was used to access OSS from an unusual terminal whose IP address is 1.2.3.4 from 00:06:45 on September 9, 2019 to 00:57:37 on September 9, 2019.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

