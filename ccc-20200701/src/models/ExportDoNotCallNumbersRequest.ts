// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @example
   * RemarkA
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scope: 'Scope',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scope: 'string',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

