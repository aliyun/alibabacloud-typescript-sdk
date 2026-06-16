// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrayTrafficWeight extends $dara.Model {
  /**
   * @remarks
   * The identifier of the gray version.
   */
  version?: string;
  /**
   * @remarks
   * The traffic weight, a value from 0.0 to 1.0.
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

