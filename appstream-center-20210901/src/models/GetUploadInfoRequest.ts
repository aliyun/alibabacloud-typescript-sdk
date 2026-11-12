// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business region where the file is uploaded. If this parameter is not specified, the default OSS region configured for the service is used.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The type of the file to upload. Currently, only TASK is supported, which indicates an image task file.
   * 
   * @example
   * TASK
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

