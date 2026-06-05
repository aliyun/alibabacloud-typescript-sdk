// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplateDictsRequest extends $dara.Model {
  /**
   * @example
   * product_version
   */
  dictType?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      dictType: 'DictType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dictType: 'string',
      maxResults: 'number',
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

