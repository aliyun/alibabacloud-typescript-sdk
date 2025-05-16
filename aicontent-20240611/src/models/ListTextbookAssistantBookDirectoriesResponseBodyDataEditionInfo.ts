// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo extends $dara.Model {
  /**
   * @example
   * 55857
   */
  bookId?: string;
  /**
   * @example
   * 1
   */
  bookVolume?: string;
  /**
   * @example
   * 2010-1(2)
   */
  edition?: string;
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 2019-1(10)
   */
  impression?: string;
  /**
   * @example
   * 9787544413695
   */
  isbn?: string;
  publisher?: string;
  /**
   * @example
   * ENGLISH
   */
  subject?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bookId: 'bookId',
      bookVolume: 'bookVolume',
      edition: 'edition',
      grade: 'grade',
      impression: 'impression',
      isbn: 'isbn',
      publisher: 'publisher',
      subject: 'subject',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookId: 'string',
      bookVolume: 'string',
      edition: 'string',
      grade: 'string',
      impression: 'string',
      isbn: 'string',
      publisher: 'string',
      subject: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

