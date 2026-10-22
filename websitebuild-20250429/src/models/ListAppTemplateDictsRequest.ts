// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplateDictsRequest extends $dara.Model {
  /**
   * @remarks
   * The dictionary type.
   * 
   * @example
   * product_version
   */
  dictType?: string;
  /**
   * @remarks
   * The number of entries per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if no more results exist.
   * 
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

