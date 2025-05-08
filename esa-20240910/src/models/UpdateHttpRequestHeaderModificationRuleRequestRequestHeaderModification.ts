// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpRequestHeaderModificationRuleRequestRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * Request header name.
   * 
   * This parameter is required.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * Operation method. Possible values:
   * 
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
   * Request header value.
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

