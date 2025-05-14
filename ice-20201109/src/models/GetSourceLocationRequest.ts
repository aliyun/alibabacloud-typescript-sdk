// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceLocationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the source location.
   * 
   * This parameter is required.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceLocationName: 'SourceLocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLocationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

