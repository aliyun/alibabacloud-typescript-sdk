// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class AiModel extends $dara.Model {
  comment?: string;
  inputSchema?: Schema;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  options?: { [key: string]: string };
  outputSchema?: Schema;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      inputSchema: 'inputSchema',
      name: 'name',
      options: 'options',
      outputSchema: 'outputSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      inputSchema: Schema,
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      outputSchema: Schema,
    };
  }

  validate() {
    if(this.inputSchema && typeof (this.inputSchema as any).validate === 'function') {
      (this.inputSchema as any).validate();
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(this.outputSchema && typeof (this.outputSchema as any).validate === 'function') {
      (this.outputSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

