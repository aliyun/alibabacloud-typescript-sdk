// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpRequestHeaderModificationRulesResponseBodyConfigsRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the request header.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * The operation type. The value range is as follows:
   * 
   * - add: Add.
   * - del: Delete.
   * - modify: Modify.
   * 
   * @example
   * add
   */
  operation?: string;
  type?: string;
  /**
   * @remarks
   * The value of the request header.
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

