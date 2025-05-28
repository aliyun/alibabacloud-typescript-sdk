// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckReadableRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the Quick BI to be checked.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work. Resources here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

