// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportApplicationConfigsResponseBodyApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * YARN
   */
  applicationName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * yarn-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * The file content. The content is Base64-encoded.
   * 
   * @example
   * export key=value
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configFileName: 'ConfigFileName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configFileName: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportApplicationConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of exported application configurations.
   */
  applicationConfigs?: ExportApplicationConfigsResponseBodyApplicationConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ExportApplicationConfigsResponseBodyApplicationConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

