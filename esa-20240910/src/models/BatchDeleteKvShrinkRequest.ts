// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  keysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

