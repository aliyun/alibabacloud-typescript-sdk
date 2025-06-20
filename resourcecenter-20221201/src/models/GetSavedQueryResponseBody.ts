// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavedQueryResponseBodySavedQuery } from "./GetSavedQueryResponseBodySavedQuery";


export class GetSavedQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D98D9B0-318D-56A4-910C-93B5F945AF2B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the template.
   */
  savedQuery?: GetSavedQueryResponseBodySavedQuery;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      savedQuery: 'SavedQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      savedQuery: GetSavedQueryResponseBodySavedQuery,
    };
  }

  validate() {
    if(this.savedQuery && typeof (this.savedQuery as any).validate === 'function') {
      (this.savedQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

