// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDefaultCollectorConfigurationsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file.
   * 
   * @example
   * - key: log\\n  title: Log file content\\n  description: >\\n    Contains log file lines.\\n  fields:\\n ......
   */
  content?: string;
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * fields.yml
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

