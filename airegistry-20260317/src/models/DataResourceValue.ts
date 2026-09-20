// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResourceValue extends $dara.Model {
  /**
   * @remarks
   * The resource name (including the file name extension).
   * 
   * @example
   * sample.md
   */
  name?: string;
  /**
   * @remarks
   * The resource type, such as template, data, or script.
   * 
   * @example
   * script
   */
  type?: string;
  /**
   * @remarks
   * The resource content.
   * 
   * @example
   * This is a sample file
   */
  content?: string;
  /**
   * @remarks
   * The resource metadata.
   */
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      content: 'Content',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      content: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

