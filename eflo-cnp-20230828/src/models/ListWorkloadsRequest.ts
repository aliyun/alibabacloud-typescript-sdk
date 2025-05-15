// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkloadsRequest extends $dara.Model {
  /**
   * @remarks
   * Scope
   * 
   * @example
   * common
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

