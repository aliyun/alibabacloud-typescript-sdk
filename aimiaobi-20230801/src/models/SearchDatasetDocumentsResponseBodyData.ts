// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDatasetDocumentsResponseBodyDataDocuments } from "./SearchDatasetDocumentsResponseBodyDataDocuments";


export class SearchDatasetDocumentsResponseBodyData extends $dara.Model {
  documents?: SearchDatasetDocumentsResponseBodyDataDocuments[];
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': SearchDatasetDocumentsResponseBodyDataDocuments },
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

