// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResourceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource.
   * 
   * @example
   * http://test-example.com/download.jpg
   */
  resUrlDownload?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * SMS_14571****
   */
  resourceId?: number;
  static names(): { [key: string]: string } {
    return {
      resUrlDownload: 'ResUrlDownload',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resUrlDownload: 'string',
      resourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

