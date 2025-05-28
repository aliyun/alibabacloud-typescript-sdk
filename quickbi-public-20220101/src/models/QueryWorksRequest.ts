// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksRequest extends $dara.Model {
  /**
   * @remarks
   * Report ID
   * 
   * This parameter is required.
   * 
   * @example
   * abcd****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

