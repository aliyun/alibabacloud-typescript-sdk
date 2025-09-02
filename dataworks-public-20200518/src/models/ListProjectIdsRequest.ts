// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectIdsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the desired Alibaba Cloud account.
   * 
   * You can log on to the [DataWorks](https://workbench.data.aliyun.com/console) console and move the pointer over the profile picture in the upper-right corner to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 171111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

