// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The validation request body.
   * 
   * This parameter is required.
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

