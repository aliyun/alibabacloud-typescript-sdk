// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutDcdnKvShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvListShrink?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
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

