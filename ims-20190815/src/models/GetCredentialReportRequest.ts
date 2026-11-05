// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialReportRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of items to return. When the response is truncated because the maximum number of items is reached, the IsTruncated parameter is set to true.
   * 
   * Valid values: 1 to 3501. Default value: 3501.
   * 
   * @example
   * 1000
   */
  maxItems?: string;
  /**
   * @remarks
   * The token used to retrieve the next set of results when the response is truncated.
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

