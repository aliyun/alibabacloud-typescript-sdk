// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceRelationsResponseBodyResourceRelationsResourceRelationList } from "./ListResourceRelationsResponseBodyResourceRelationsResourceRelationList";


export class ListResourceRelationsResponseBodyResourceRelations extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was used to initiate the next request.
   * 
   * @example
   * C2DjqMYSy0is7zSMGf21****
   */
  nextToken?: string;
  /**
   * @remarks
   * An array that contains the relationships.
   */
  resourceRelationList?: ListResourceRelationsResponseBodyResourceRelationsResourceRelationList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceRelationList: 'ResourceRelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceRelationList: { 'type': 'array', 'itemType': ListResourceRelationsResponseBodyResourceRelationsResourceRelationList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationList)) {
      $dara.Model.validateArray(this.resourceRelationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

