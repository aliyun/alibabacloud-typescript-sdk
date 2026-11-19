// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who favorited the work. The user ID here refers to the Quick BI user ID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work to remove from favorites.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d6ae4e7-cede-43cd-b4d3-d2fd442a9202
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

