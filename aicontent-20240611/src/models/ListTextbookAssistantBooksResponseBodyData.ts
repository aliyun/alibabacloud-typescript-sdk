// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBooksResponseBodyDataBookList } from "./ListTextbookAssistantBooksResponseBodyDataBookList";
import { ListTextbookAssistantBooksResponseBodyDataPaginationData } from "./ListTextbookAssistantBooksResponseBodyDataPaginationData";


export class ListTextbookAssistantBooksResponseBodyData extends $dara.Model {
  bookList?: ListTextbookAssistantBooksResponseBodyDataBookList[];
  paginationData?: ListTextbookAssistantBooksResponseBodyDataPaginationData;
  static names(): { [key: string]: string } {
    return {
      bookList: 'bookList',
      paginationData: 'paginationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookList: { 'type': 'array', 'itemType': ListTextbookAssistantBooksResponseBodyDataBookList },
      paginationData: ListTextbookAssistantBooksResponseBodyDataPaginationData,
    };
  }

  validate() {
    if(Array.isArray(this.bookList)) {
      $dara.Model.validateArray(this.bookList);
    }
    if(this.paginationData && typeof (this.paginationData as any).validate === 'function') {
      (this.paginationData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

