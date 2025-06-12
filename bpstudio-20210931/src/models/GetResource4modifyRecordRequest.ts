// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResource4ModifyRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      maxResults: 'number',
      nextToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

