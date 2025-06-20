// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiagnosticResultsResponseBodyDiagnosticResults } from "./ListDiagnosticResultsResponseBodyDiagnosticResults";


export class ListDiagnosticResultsResponseBody extends $dara.Model {
  diagnosticResults?: ListDiagnosticResultsResponseBodyDiagnosticResults[];
  /**
   * @remarks
   * *
   * *
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @example
   * AC4F0004-7BCE-52E0-891B-CAC7D64E3368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosticResults: 'DiagnosticResults',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticResults: { 'type': 'array', 'itemType': ListDiagnosticResultsResponseBodyDiagnosticResults },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosticResults)) {
      $dara.Model.validateArray(this.diagnosticResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

