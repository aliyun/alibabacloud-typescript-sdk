// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebApplicationsRequest extends $dara.Model {
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
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MTIzNCNhYmM
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the application name.
   * 
   * @example
   * my-application
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namespaceId: 'string',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

