// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssDownloadsResponseBodyItemsOssDownload } from "./DescribeOssDownloadsResponseBodyItemsOssDownload";


export class DescribeOssDownloadsResponseBodyItems extends $dara.Model {
  ossDownload?: DescribeOssDownloadsResponseBodyItemsOssDownload[];
  static names(): { [key: string]: string } {
    return {
      ossDownload: 'OssDownload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDownload: { 'type': 'array', 'itemType': DescribeOssDownloadsResponseBodyItemsOssDownload },
    };
  }

  validate() {
    if(Array.isArray(this.ossDownload)) {
      $dara.Model.validateArray(this.ossDownload);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

