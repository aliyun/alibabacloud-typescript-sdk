// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDispatchRuleRequest extends $dara.Model {
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      system: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

