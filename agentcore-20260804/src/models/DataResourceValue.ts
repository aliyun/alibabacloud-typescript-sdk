// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResourceValue extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      content: 'content',
      metadata: 'metadata',
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

