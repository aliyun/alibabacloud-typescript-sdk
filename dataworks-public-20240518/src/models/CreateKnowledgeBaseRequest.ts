// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the creation request. This parameter is optional. It accepts up to 64 characters and must contain at least one non-whitespace character. Use the same value when the same caller retries the same creation request in the same region. Reusing a token with different request content returns a conflict. If you omit the token, repeated requests may create multiple knowledge bases.
   * 
   * @example
   * kb-create-sales-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the knowledge base. This parameter is optional. The maximum length is 1024 characters.
   * 
   * @example
   * Sales metrics and business policies
   */
  description?: string;
  /**
   * @remarks
   * The name of the knowledge base. This parameter cannot be empty. The maximum length is 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Sales knowledge base
   */
  name?: string;
  /**
   * @remarks
   * The type of the knowledge base. PERSONAL: personal knowledge base. ENTERPRISE: enterprise knowledge base. If this parameter is omitted, the default value is PERSONAL. Creating an enterprise knowledge base requires the corresponding enterprise knowledge base capabilities.
   * 
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

