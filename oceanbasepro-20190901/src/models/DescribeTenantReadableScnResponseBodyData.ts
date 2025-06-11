// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantReadableScnResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum readable timestamp.
   * 
   * @example
   * 1715329164977
   */
  readableScn?: number;
  static names(): { [key: string]: string } {
    return {
      readableScn: 'ReadableScn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readableScn: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

