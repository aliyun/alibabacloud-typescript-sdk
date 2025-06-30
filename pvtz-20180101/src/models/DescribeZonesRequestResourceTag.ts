// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the zone.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the zone.
   * 
   * @example
   * daily
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

