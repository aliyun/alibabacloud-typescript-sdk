// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyModelRequestContent } from "./ModifyModelRequestContent";


export class ModifyModelRequest extends $dara.Model {
  content?: ModifyModelRequestContent;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      status: 'status',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyModelRequestContent,
      status: 'string',
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

