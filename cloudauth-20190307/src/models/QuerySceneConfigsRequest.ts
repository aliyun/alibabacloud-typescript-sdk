// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySceneConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Scene type.
   * 
   * This parameter is required.
   * 
   * @example
   * VOLUNTARY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

