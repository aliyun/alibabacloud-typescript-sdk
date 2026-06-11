// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The tag key to filter by. For example, to filter traces by region, set this parameter to `RegionId`.
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * The comparison operator used to match the tag\\"s value. Valid values: `EQUAL` and `NOT_EQUAL`.
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * The value to compare against the tag\\"s value. Used with the `key` and `type` parameters to form a complete filter condition.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

