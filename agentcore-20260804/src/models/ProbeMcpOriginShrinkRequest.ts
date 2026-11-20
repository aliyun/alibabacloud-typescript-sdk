// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeMcpOriginShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of the origin server configuration must not exceed that of the creation interface. The control fields for this validation only restrict the validation scope and do not extend the origin server access configuration.
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

