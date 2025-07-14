// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransferFilesRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0****
   */
  nextToken?: string;
  /**
   * @example
   * trt-03tdwg4tcuwdzv****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

