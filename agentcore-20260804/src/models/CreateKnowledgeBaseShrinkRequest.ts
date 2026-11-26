// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for creating a knowledge base.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The optional idempotency token for the creation request. If provided, it must be a non-blank string with a maximum length of 128 characters. Within the same workspace, the same token and the same request return the original result, while different requests return IdempotencyConflict. If not provided, each request is processed as a new request, and idempotency across request retries is not guaranteed. Creation with the same name is still subject to the name uniqueness constraint.
   * 
   * @example
   * kb-create-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

