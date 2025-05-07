// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FindUserAvailbleResourcesResponseBodyData } from "./FindUserAvailbleResourcesResponseBodyData";


export class FindUserAvailbleResourcesResponseBody extends $dara.Model {
  code?: string;
  count?: number;
  data?: FindUserAvailbleResourcesResponseBodyData;
  maxResults?: number;
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: FindUserAvailbleResourcesResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

