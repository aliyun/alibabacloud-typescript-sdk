// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScansRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

