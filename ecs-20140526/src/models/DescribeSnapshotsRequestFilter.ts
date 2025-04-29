// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of filter 1 that is used to query resources. Set the value to `CreationStartTime`. You can specify a time by configuring both `Filter.1.Key` and `Filter.1.Value` to query resources that were created after the time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The value of filter 1 that is used to query resources. Set the value to a time. If you configure this parameter, you must also configure `Filter.1.Key`. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * @example
   * 2019-12-13T17:00Z
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

