// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      newMode: 'newMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

