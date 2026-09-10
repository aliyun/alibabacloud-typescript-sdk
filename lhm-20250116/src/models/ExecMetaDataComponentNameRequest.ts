// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecMetaDataComponentNameRequest extends $dara.Model {
  /**
   * @remarks
   * The datasource name to check. The system performs an exact match against non-deleted datasources under the current tenant.
   * 
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  static names(): { [key: string]: string } {
    return {
      dsName: 'dsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

