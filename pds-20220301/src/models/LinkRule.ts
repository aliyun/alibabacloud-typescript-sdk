// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkRule extends $dara.Model {
  linkType?: string;
  srcDriveId?: string;
  srcDriveName?: string;
  srcFileId?: string;
  srcFileName?: string;
  srcValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      linkType: 'link_type',
      srcDriveId: 'src_drive_id',
      srcDriveName: 'src_drive_name',
      srcFileId: 'src_file_id',
      srcFileName: 'src_file_name',
      srcValid: 'src_valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkType: 'string',
      srcDriveId: 'string',
      srcDriveName: 'string',
      srcFileId: 'string',
      srcFileName: 'string',
      srcValid: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

