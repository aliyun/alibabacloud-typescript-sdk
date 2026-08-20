// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedSoftwareShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The prohibited software ID.
   */
  softwareIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      softwareIdShrink: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareIdShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

