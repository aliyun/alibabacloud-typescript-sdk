// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRequest extends $dara.Model {
  bizUsage?: string;
  current?: number;
  excludedBizUsage?: string;
  jwtToken?: string;
  size?: number;
  sortField?: string;
  status?: string;
  title?: string;
  type?: string;
  withSource?: boolean;
  withUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      current: 'Current',
      excludedBizUsage: 'ExcludedBizUsage',
      jwtToken: 'JwtToken',
      size: 'Size',
      sortField: 'SortField',
      status: 'Status',
      title: 'Title',
      type: 'Type',
      withSource: 'WithSource',
      withUser: 'WithUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      current: 'number',
      excludedBizUsage: 'string',
      jwtToken: 'string',
      size: 'number',
      sortField: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
      withSource: 'boolean',
      withUser: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

