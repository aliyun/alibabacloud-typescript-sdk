// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. Set the value to **CreationStartTime**, which specifies the time when the system started to create the resource.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2023-01-01T01:00Z
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

