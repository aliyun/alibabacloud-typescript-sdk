// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to logically delete the project. Valid values: true and false. Default value: true. The value false indicates that the project is physically deleted.
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

