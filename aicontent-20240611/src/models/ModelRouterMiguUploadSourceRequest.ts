// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterMiguUploadSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The source file type. Valid values: VIDEO, IMAGE, AUDIO, and TEXT.
   * 
   * This parameter is required.
   * 
   * @example
   * VIDEO
   */
  fileType?: string;
  /**
   * @remarks
   * The business service name, such as kling, vidu, or wonder.
   * 
   * This parameter is required.
   * 
   * @example
   * kling
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'fileType',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

