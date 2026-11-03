// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebApplicationRevisionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of applications returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * A2RN
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namespaceId: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

