// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration level. Valid values: `0` (system), `1` (tenant), and `2` (instance).
   * 
   * @example
   * 1
   */
  configLevel?: number;
  /**
   * @remarks
   * The ID of the entry at the level specified by `ConfigLevel`.
   * 
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  entryId?: string;
  static names(): { [key: string]: string } {
    return {
      configLevel: 'ConfigLevel',
      entryId: 'EntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configLevel: 'number',
      entryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

