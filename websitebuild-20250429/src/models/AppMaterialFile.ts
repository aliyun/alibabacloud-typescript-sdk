// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialFile extends $dara.Model {
  bizId?: string;
  contentType?: string;
  createTime?: string;
  deletedTime?: string;
  directoryId?: string;
  fileId?: string;
  fileUrl?: string;
  height?: number;
  name?: string;
  status?: string;
  storageSize?: string;
  suffix?: string;
  type?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      directoryId: 'DirectoryId',
      fileId: 'FileId',
      fileUrl: 'FileUrl',
      height: 'Height',
      name: 'Name',
      status: 'Status',
      storageSize: 'StorageSize',
      suffix: 'Suffix',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contentType: 'string',
      createTime: 'string',
      deletedTime: 'string',
      directoryId: 'string',
      fileId: 'string',
      fileUrl: 'string',
      height: 'number',
      name: 'string',
      status: 'string',
      storageSize: 'string',
      suffix: 'string',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

