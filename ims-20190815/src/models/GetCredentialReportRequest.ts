// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialReportRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
   * 
   * Valid values: 1 to 3501. Default value: 3501.
   * 
   * @example
   * 1000
   */
  maxItems?: string;
  /**
   * @remarks
   * The token that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.``
   * 
   * @example
   * EXAMPLE
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxItems: 'MaxItems',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxItems: 'string',
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

