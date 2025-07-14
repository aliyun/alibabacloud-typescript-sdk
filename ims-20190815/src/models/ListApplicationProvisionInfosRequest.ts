// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationProvisionInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the applications. Valid values:
   * 
   * *   inner: The applications are from the current account.
   * *   external: The applications are from other accounts.
   * 
   * @example
   * external
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

