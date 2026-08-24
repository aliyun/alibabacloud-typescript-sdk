// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOneMetaSqlTemplatesRequest extends $dara.Model {
  catalogUuid?: string;
  databaseUuid?: string;
  enableVectorSearch?: boolean;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  tag?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      enableVectorSearch: 'EnableVectorSearch',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      query: 'Query',
      tag: 'Tag',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      enableVectorSearch: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
      tag: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

