// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgePointsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The graph objects to focus the search on. You can specify up to 2 unique objects. The objects must be within the current authorized search scope and do not expand permissions.
   */
  focusObjectsShrink?: string;
  /**
   * @remarks
   * A list of 1 to 50 unique knowledge base IDs that restricts the search. If you omit this parameter, the operation discovers knowledge bases within the caller’s authorized scope. If you provide IDs, the operation checks access to each knowledge base and the entire request fails if the caller lacks access to any of them.
   */
  knowledgeBaseIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of hits across all knowledge bases. Default value: 10. Valid values: 1 to 50. This parameter does not specify the quota for each knowledge base or the page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The natural language question. The length cannot exceed 256 Unicode code points after leading and trailing whitespaces are removed.
   * 
   * This parameter is required.
   * 
   * @example
   * How is sales revenue calculated, and which tables does it come from?
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      focusObjectsShrink: 'FocusObjects',
      knowledgeBaseIdsShrink: 'KnowledgeBaseIds',
      maxResults: 'MaxResults',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focusObjectsShrink: 'string',
      knowledgeBaseIdsShrink: 'string',
      maxResults: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

