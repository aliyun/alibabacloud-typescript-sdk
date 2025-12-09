// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRenderingServerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  renderingInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceIdsShrink: 'RenderingInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

