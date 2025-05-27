// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscoverEventSourceResponseBodyDataSourceMySQLDiscoveryTableSchemaColumns extends $dara.Model {
  /**
   * @example
   * auto_increment
   */
  extra?: string;
  /**
   * @example
   * id
   */
  field?: string;
  /**
   * @example
   * NO
   */
  isNull?: string;
  /**
   * @example
   * PRI
   */
  key?: string;
  /**
   * @example
   * int
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      field: 'Field',
      isNull: 'IsNull',
      key: 'Key',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      field: 'string',
      isNull: 'string',
      key: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

