// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDocumentsResponseBodyDataSchema } from "./ListDocumentsResponseBodyDataSchema";


export class ListDocumentsResponseBodyData extends $dara.Model {
  documents?: { [key: string]: any }[];
  /**
   * @example
   * 54d1a616d95a4a01ba58967a9115b649
   */
  nextPageToken?: string;
  /**
   * @remarks
   * scheme
   */
  schema?: ListDocumentsResponseBodyDataSchema;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      nextPageToken: 'NextPageToken',
      schema: 'Schema',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextPageToken: 'string',
      schema: ListDocumentsResponseBodyDataSchema,
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

