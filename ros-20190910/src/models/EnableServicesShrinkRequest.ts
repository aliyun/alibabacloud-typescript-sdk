// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableServicesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  serviceNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceNamesShrink: 'ServiceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

