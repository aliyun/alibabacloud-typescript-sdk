// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecretsResponseBodySecrets } from "./DescribeSecretsResponseBodySecrets";


export class DescribeSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the credential.
   */
  secrets?: DescribeSecretsResponseBodySecrets[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secrets: { 'type': 'array', 'itemType': DescribeSecretsResponseBodySecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

