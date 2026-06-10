// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimpleOfficeSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The office site ID.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

