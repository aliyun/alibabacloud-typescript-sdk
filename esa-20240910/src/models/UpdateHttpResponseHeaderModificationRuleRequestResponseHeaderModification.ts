// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * Response header name.
   * 
   * This parameter is required.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * Operation method. Value range:
   * - add: Add.
   * - del: Delete
   * - modify: Modify.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  type?: string;
  /**
   * @remarks
   * Response header value.
   * 
   * @example
   * headerValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

