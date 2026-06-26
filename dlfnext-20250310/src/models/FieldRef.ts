// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FullDataType } from "./FullDataType";


export class FieldRef extends $dara.Model {
  /**
   * @remarks
   * Text sequence
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Table name
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * File type
   */
  type?: FullDataType;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      name: 'string',
      type: FullDataType,
    };
  }

  validate() {
    if(this.type && typeof (this.type as any).validate === 'function') {
      (this.type as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

