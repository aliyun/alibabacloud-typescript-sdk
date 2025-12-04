// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataEventSelectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  static names(): { [key: string]: string } {
    return {
      trailName: 'TrailName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trailName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

