// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateKnowledgeBaseInput } from "./UpdateKnowledgeBaseInput";


export class UpdateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating a knowledge base.
   */
  body?: UpdateKnowledgeBaseInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateKnowledgeBaseInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

