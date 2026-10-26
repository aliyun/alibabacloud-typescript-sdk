// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesInput } from "./QueryAlertRulesInput";


export class QueryAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for querying alert rules.
   */
  body?: QueryAlertRulesInput;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * xxxxx-xxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of data records to return in the current read operation.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the starting position for the current read operation. If this parameter is left empty, the read operation starts from the beginning.
   * 
   * @example
   * 123456
   */
  nextToken?: string;
  /**
   * @remarks
   * The query filter conditions in JSON string format. The field semantics are the same as those in the request body. Supported fields include filter (such as uuid, displayName, labels, status, and enabled, where sibling fields use the AND logical operator), pagination (pageNumber and pageSize), and workspace. You must specify either this parameter or the body parameter. If both are specified, the body parameter takes precedence.
   * 
   * @example
   * {"filter":{"displayName":{"contains":"my-rule"}},"pagination":{"pageNumber":1,"pageSize":20}}
   */
  queryJson?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queryJson: 'queryJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: QueryAlertRulesInput,
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryJson: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

