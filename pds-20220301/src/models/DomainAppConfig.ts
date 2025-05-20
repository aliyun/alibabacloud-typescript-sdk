// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DomainAppConfig extends $dara.Model {
  allowUploadCustomFileExtList?: string[];
  allowUploadFileCategoryList?: string[];
  sameNameFileUploadMode?: string;
  singleFileUploadSizeLimit?: number;
  webClientDownloadMode?: string;
  static names(): { [key: string]: string } {
    return {
      allowUploadCustomFileExtList: 'allow_upload_custom_file_ext_list',
      allowUploadFileCategoryList: 'allow_upload_file_category_list',
      sameNameFileUploadMode: 'same_name_file_upload_mode',
      singleFileUploadSizeLimit: 'single_file_upload_size_limit',
      webClientDownloadMode: 'web_client_download_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUploadCustomFileExtList: { 'type': 'array', 'itemType': 'string' },
      allowUploadFileCategoryList: { 'type': 'array', 'itemType': 'string' },
      sameNameFileUploadMode: 'string',
      singleFileUploadSizeLimit: 'number',
      webClientDownloadMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowUploadCustomFileExtList)) {
      $dara.Model.validateArray(this.allowUploadCustomFileExtList);
    }
    if(Array.isArray(this.allowUploadFileCategoryList)) {
      $dara.Model.validateArray(this.allowUploadFileCategoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

