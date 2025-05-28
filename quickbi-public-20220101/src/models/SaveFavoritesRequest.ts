// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveFavoritesRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the person who favorites the work. This user ID is the UserID of Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work being favorited.
   * 
   * This parameter is required.
   * 
   * @example
   * d23e84a1-82a0-4292-bfdb-521306c3****
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

