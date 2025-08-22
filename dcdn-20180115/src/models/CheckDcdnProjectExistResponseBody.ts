// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDcdnProjectExistResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the real-time log delivery project exists. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  exist?: string;
  static names(): { [key: string]: string } {
    return {
      exist: 'Exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDcdnProjectExistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  content?: CheckDcdnProjectExistResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b021e538-9dde-46ed-a1f2-9469da8f3e77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CheckDcdnProjectExistResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

