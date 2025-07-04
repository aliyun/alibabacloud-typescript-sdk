// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIndexRequestDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace to which the SARO data source belongs.
   * 
   * @example
   * flink-test-fjx-default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * device_event_shy_summary_
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

