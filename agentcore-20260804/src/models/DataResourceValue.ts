// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResourceValue extends $dara.Model {
  /**
   * @remarks
   * The content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      metadata: 'metadata',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      type: 'string',
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

