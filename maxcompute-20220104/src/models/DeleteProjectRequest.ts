// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a logical deletion. The default value is true. A value of false indicates a physical deletion.
   * 
   * @example
   * true
   */
  isLogical?: boolean;
  static names(): { [key: string]: string } {
    return {
      isLogical: 'isLogical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLogical: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

