// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      kvListShrink: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvListShrink: 'string',
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

