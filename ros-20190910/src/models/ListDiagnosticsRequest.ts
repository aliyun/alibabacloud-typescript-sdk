// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosticsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the diagnosis.
   * 
   * @example
   * 2829A772-B154-5A0A-B61B-DEE8A9EE8A5D
   */
  diagnosticKey?: string;
  /**
   * @remarks
   * The product that is diagnosed.
   * 
   * @example
   * ros
   */
  diagnosticProduct?: string;
  /**
   * @remarks
   * The maximum number of results to be returned in a single call when NextToken is used for the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f01****
   */
  nextToken?: string;
  /**
   * @remarks
   * The diagnosis status.
   * 
   * @example
   * Complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticKey: 'DiagnosticKey',
      diagnosticProduct: 'DiagnosticProduct',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticKey: 'string',
      diagnosticProduct: 'string',
      maxResults: 'string',
      nextToken: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

