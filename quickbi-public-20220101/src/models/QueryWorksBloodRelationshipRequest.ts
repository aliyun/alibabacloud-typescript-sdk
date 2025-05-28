// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksBloodRelationshipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data work.
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

