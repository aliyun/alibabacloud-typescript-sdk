// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmbeddedStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The work ID of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
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

