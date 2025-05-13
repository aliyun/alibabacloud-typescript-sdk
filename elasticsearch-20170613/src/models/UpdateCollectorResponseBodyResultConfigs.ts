// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorResponseBodyResultConfigs extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file.
   * 
   * @example
   * filebeat.inputs:xxx
   */
  content?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * filebeat.yml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

