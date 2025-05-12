// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimpleOfficeSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

