// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoProcessingRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListVideoProcessings](~~ListVideoProcessings~~) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23321557***
   */
  configId?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 23282348***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

