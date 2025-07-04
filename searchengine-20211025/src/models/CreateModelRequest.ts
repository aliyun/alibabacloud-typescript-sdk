// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelRequestContent } from "./CreateModelRequestContent";


export class CreateModelRequest extends $dara.Model {
  content?: CreateModelRequestContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateModelRequestContent,
      name: 'string',
      dryRun: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

