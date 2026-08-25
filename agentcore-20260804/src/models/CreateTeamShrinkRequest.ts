// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamShrinkRequest extends $dara.Model {
  bodyShrink?: string;
  /**
   * @example
   * 暂不支持
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

