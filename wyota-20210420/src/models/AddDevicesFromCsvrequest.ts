// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDevicesFromCSVRequest extends $dara.Model {
  fileName?: string;
  fileType?: number;
  seatCol?: number;
  siteId?: string;
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
      seatCol: 'SeatCol',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'number',
      seatCol: 'number',
      siteId: 'string',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

