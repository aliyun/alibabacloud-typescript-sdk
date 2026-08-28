// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedraftSkillVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

