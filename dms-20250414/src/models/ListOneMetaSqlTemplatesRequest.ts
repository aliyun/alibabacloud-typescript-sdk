// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOneMetaSqlTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the associated catalog.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the associated database.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * Specifies whether to use semantic search.
   * 
   * @example
   * true
   */
  enableVectorSearch?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * sale
   */
  query?: string;
  /**
   * @remarks
   * The SQL template tag.
   * 
   * @example
   * new_sales
   */
  tag?: string;
  /**
   * @remarks
   * The UUIDs of knowledge instances. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 86c5c290052147c***,56c5c2900dasqw***
   */
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

