// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestLabelsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * #A16AD7
   */
  color?: string;
  description?: string;
  /**
   * @example
   * f2bf0e0b4ce34a348b2d971c69a1d11f
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * Invalid.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 4D6AF7CC-B43B-5454-86AB-023D25E44868
   */
  requestId?: string;
  result?: ListMergeRequestLabelsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestLabelsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

