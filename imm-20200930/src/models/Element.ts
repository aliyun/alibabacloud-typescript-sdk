// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ElementContent } from "./ElementContent";
import { ElementRelation } from "./ElementRelation";


export class Element extends $dara.Model {
  /**
   * @remarks
   * The element contents.
   */
  elementContents?: ElementContent[];
  /**
   * @remarks
   * The relationships between the current element and other elements.
   */
  elementRelations?: ElementRelation[];
  /**
   * @remarks
   * The element type.
   * 
   * @example
   * title; image; table; narrative-text
   */
  elementType?: string;
  /**
   * @remarks
   * The unique ID of the element.
   * 
   * @example
   * id1
   */
  objectId?: string;
  /**
   * @remarks
   * The similarity between the current file and its extracted semantics.
   * 
   * @example
   * 0.8
   */
  semanticSimilarity?: number;
  static names(): { [key: string]: string } {
    return {
      elementContents: 'ElementContents',
      elementRelations: 'ElementRelations',
      elementType: 'ElementType',
      objectId: 'ObjectId',
      semanticSimilarity: 'SemanticSimilarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementContents: { 'type': 'array', 'itemType': ElementContent },
      elementRelations: { 'type': 'array', 'itemType': ElementRelation },
      elementType: 'string',
      objectId: 'string',
      semanticSimilarity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elementContents)) {
      $dara.Model.validateArray(this.elementContents);
    }
    if(Array.isArray(this.elementRelations)) {
      $dara.Model.validateArray(this.elementRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

