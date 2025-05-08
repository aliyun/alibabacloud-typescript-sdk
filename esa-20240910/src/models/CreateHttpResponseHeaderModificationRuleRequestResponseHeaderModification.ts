// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpResponseHeaderModificationRuleRequestResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * Response header name.
   * 
   * This parameter is required.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * Operation type. Possible values:
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
   * Response header value.
   * 
   * @example
   * headervalue
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

