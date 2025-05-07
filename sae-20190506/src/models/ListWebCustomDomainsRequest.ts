// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebCustomDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7e41aff0-9eca-45c9-ac48-675e09******
   */
  applicationId?: string;
  /**
   * @remarks
   * The number of custom domain names returned.
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
   * cn-hangzhou
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
  /**
   * @remarks
   * The prefix of the custom domain name that you want to query.
   * 
   * @example
   * remoteresult
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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

