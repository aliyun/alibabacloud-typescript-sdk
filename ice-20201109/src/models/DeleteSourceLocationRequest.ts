// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceLocationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use delete markers.
   * 
   * @example
   * true
   */
  softDelete?: boolean;
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
      softDelete: 'SoftDelete',
      sourceLocationName: 'SourceLocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softDelete: 'boolean',
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

